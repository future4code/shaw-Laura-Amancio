import { InputEditPollBDDTO, InputEditPollDTO } from "./../models/PollsModel";
import PollsDatabase from "../data/PollsDatabase";
import { InputPollDTO, PollsModel } from "../models/PollsModel";
import { Authenticator } from "../services/Autheticator";
import { IdGenerator } from "../services/IdGenerator";
import { BaseError } from "../error/BaseError";
import UserDatabse from "../data/UsersDatabase";
import { UserRole } from "../models/UsersModel";
import AnswersDatabase from "../data/AnswersDatabase";

export default class PollsBusiness {
  constructor(
    private idGenerator = new IdGenerator(),
    private pollsData = new PollsDatabase(),
    private authenticator = new Authenticator(),
    private userData = new UserDatabse(),
    private answerData = new AnswersDatabase()
  ) {}

  public async createPoll(input: InputPollDTO, token: string) {
    try {
      const { title, start_date, end_date } = input;
      if (!token) {
        throw new BaseError(404, "Token not found, please check login");
      }

      const validToken = this.authenticator.getData(token);
      if (!validToken.id) {
        throw new BaseError(401, "Invalid token, check login");
      }

      if (!title || !start_date || !end_date) {
        throw new BaseError(422, "Please fill all fields");
      }

      const findTitle = await this.pollsData.findByTitle(title);
      if (findTitle) {
        throw new BaseError(401, "This poll already exists");
      }

      const [dayStart, monthStart, yearStart] = start_date.split("/")
      let start_dateFormat = new Date(
        `${yearStart}-${monthStart}-${dayStart}`
      )

      const [dayEnd, monthEnd, yearEnd] = end_date.split("/");
      let end_dateFormat = new Date(`${yearEnd}-${monthEnd}-${dayEnd}`);

      if (
        start_dateFormat.setUTCHours(0, 0, 0, 0) <
          new Date().setUTCHours(0, 0, 0, 0) ||
        end_dateFormat.setUTCHours(0, 0, 0, 0) <
          new Date().setUTCHours(0, 0, 0, 0) ||
        end_dateFormat.setUTCHours(0, 0, 0, 0) <
          start_dateFormat.setUTCHours(0, 0, 0, 0)
      ) {
        throw new BaseError(400, "Invalid date");
      }

      const id = this.idGenerator.generate();

      const newPoll = new PollsModel(
        id,
        validToken.id,
        title,
        start_date,
        end_date
      );

      await this.pollsData.createPoll(newPoll);
    } catch (error: any) {
      throw new BaseError(400, error.message);
    }
  }

  public async editPoll(input: InputEditPollDTO, token: string, id: string) {
    try {
      const { title } = input;
      let { start_date, end_date } = input;

      if (!token) {
        throw new BaseError(404, "Token not found, please check login");
      }
      const validToken = this.authenticator.getData(token);
      if (!validToken.id) {
        throw new BaseError(401, "Invalid token, check login");
      }
      const validPoll = await this.pollsData.findByID(id);
      if (!validPoll) {
        throw new BaseError(404, "Poll not found");
      }
      let startDB = validPoll.getStartDate() as Date
      let endDB = validPoll.getEndDate() as Date
      const user = await this.userData.findByID(validToken.id);

      if (user.getRole() === UserRole.ADMIN) {
        const newInput: InputEditPollBDDTO = {
          title,
        }

        if(start_date && end_date) {
          const [dayStart, monthStart, yearStart] = start_date.split("/");
          let start_dateFormat = new Date(
            `${yearStart}-${monthStart}-${dayStart}`
          );
          const [dayEnd, monthEnd, yearEnd] = end_date.split("/");
          let end_dateFormat = new Date(
            `${yearEnd}-${monthEnd}-${dayEnd}`
          )
          if (
            start_dateFormat.setUTCHours(0, 0, 0, 0) <
            new Date().setUTCHours(0, 0, 0, 0) || 
            start_dateFormat.setUTCHours(0, 0, 0, 0) > 
            end_dateFormat.setUTCHours(0,0,0,0)
          ) {
            throw new BaseError(400, "Invalid date");
          }
          newInput.start_date = start_date
          newInput.end_date = end_date
        }

        if (start_date && !end_date) {
          const [dayStart, monthStart, yearStart] = start_date.split("/")
          let start_dateFormat = new Date(
            `${yearStart}-${monthStart}-${dayStart}`
          );
          
          if (
            start_dateFormat.setUTCHours(0, 0, 0, 0) <
            new Date().setUTCHours(0, 0, 0, 0) || 
            start_dateFormat.setUTCHours(0, 0, 0, 0) > 
            endDB.setUTCHours(0,0,0,0)
          ) {
            throw new BaseError(400, "Invalid date");
          }
          newInput.start_date = start_date
        }

        if (end_date && !start_date) {
          const [dayEnd, monthEnd, yearEnd] = end_date.split("/");
          let end_dateFormat = new Date(
            `${yearEnd}-${monthEnd}-${dayEnd}`
          )

          if (
            end_dateFormat.setUTCHours(0, 0, 0, 0) <
            new Date().setUTCHours(0, 0, 0, 0) || 
            end_dateFormat.setUTCHours(0, 0, 0, 0) <
            startDB.setUTCHours(0,0,0,0)
          ) {
            throw new BaseError(400, "Invalid date");
          }
          newInput.end_date = end_date;
        }

        await this.pollsData.editPoll(newInput, id);
      } else {
        if (user.getId() !== validPoll.getCreatorId()) {
          throw new BaseError(403, "You can't edit others Polls");
        }
        const newInput: InputEditPollBDDTO = {
          title,
        };

        if(start_date && end_date) {
          const [dayStart, monthStart, yearStart] = start_date.split("/");
          let start_dateFormat = new Date(
            `${yearStart}-${monthStart}-${dayStart}`
          );
          const [dayEnd, monthEnd, yearEnd] = end_date.split("/");
          let end_dateFormat = new Date(
            `${yearEnd}-${monthEnd}-${dayEnd}`
          )
          if (
            start_dateFormat.setUTCHours(0, 0, 0, 0) <
            new Date().setUTCHours(0, 0, 0, 0) || 
            start_dateFormat.setUTCHours(0, 0, 0, 0) > 
            end_dateFormat.setUTCHours(0,0,0,0)
          ) {
            throw new BaseError(400, "Invalid date");
          }
          newInput.start_date = start_date
          newInput.end_date = end_date
        }

        if (start_date) {
          const [dayStart, monthStart, yearStart] = start_date.split("/");
          const start_dateFormat = new Date(
            `${yearStart}-${monthStart}-${dayStart}`
          );

          if (
            start_dateFormat.setUTCHours(0, 0, 0, 0) <
            new Date().setUTCHours(0, 0, 0, 0) || 
            start_dateFormat.setUTCHours(0, 0, 0, 0) > 
            endDB.setUTCHours(0,0,0,0)
          ) {
            throw new BaseError(400, "Invalid date");
          }
          newInput.start_date = start_date
        }

        if (end_date) {
          const [dayEnd, monthEnd, yearEnd] = end_date.split("/");
          const end_dateFormat = new Date(
            `${yearEnd}-${monthEnd}-${dayEnd}`
          );

          if (
            end_dateFormat.setUTCHours(0, 0, 0, 0) <
            new Date().setUTCHours(0, 0, 0, 0) || 
            end_dateFormat.setUTCHours(0, 0, 0, 0) <
            startDB.setUTCHours(0,0,0,0)
          ) {
            throw new BaseError(400, "Invalid date");
          }
          newInput.end_date = end_date
        }

        await this.pollsData.editPoll(newInput, id);
      }
    } catch (error: any) {
      throw new BaseError(400, error.message);
    }
  }

  public async deletePoll(id: string, token: string) {
    try {
      if (!id || !token) {
        throw new BaseError(422, "Missing id or token");
      }

      const validId = await this.pollsData.findByID(id);
      if (!validId) {
        throw new BaseError(404, "Poll not found");
      }

      const validToken = this.authenticator.getData(token);
      if (!validToken.id) {
        throw new BaseError(401, "Invalid toke, please check login");
      }

      const user = await this.userData.findByID(validToken.id)
      if(user.getRole() === UserRole.ADMIN){
        await this.answerData.deleteAllAnswers(id)
        await this.pollsData.deletePoll(id);
      }else{
        if(user.getId() !== validId.getCreatorId()) {
          throw new BaseError(403, "You can't delete others Poll")
        }else{
          await this.answerData.deleteAllAnswers(id)
          await this.pollsData.deletePoll(id);
        }
      }
    } catch (error: any) {
      throw new BaseError(400, error.message);
    }
  }

  public async getAllPolls(token: string) {
    try {
      if (!token) {
        throw new BaseError(422, "Token missing");
      }

      const validToken = this.authenticator.getData(token);
      if (!validToken.id) {
        throw new BaseError(401, "Invalid token, verify login");
      }

      const result = await this.pollsData.getAllPolls();

      return result;
    } catch (error: any) {
      throw new BaseError(400, error.message);
    }
  }

  public async getPollById(id: string, token: string) {
    try {
      if (!token) {
        throw new BaseError(422, "Token missing");
      }
      if (!id) {
        throw new BaseError(422, "Please inform the Poll ID");
      }

      const validToken = this.authenticator.getData(token);
      if (!validToken.id) {
        throw new BaseError(401, "Invalid token");
      }

      const validPoll = await this.pollsData.findByID(id);
      if (!validPoll) {
        throw new BaseError(404, "Poll not found");
      }

      return validPoll;
    } catch (error: any) {
      throw new BaseError(400, error.message);
    }
  }
}
