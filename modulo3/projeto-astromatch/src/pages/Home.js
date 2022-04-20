import React, {useEffect, useState} from "react";
import axios from "axios";
import { urlChoosePerson, urlGetPerson } from "../constants/Constants";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const CardImg = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 3%;

`

const Image = styled.div`
  object-fit: contain;

  img{
    object-fit: contain;
    max-width: 100%;
    height: 500px;
  }
`

const CardButons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3% 8%;
`


const CardHome = () => {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfileToChoose();
    }, [])

    const getProfileToChoose = () =>{
        axios
        .get(urlGetPerson)
        .then((res) =>{
            setProfile(res.data.profile)
        })
        .catch((err) =>{
            console.log(err.response.data)
        })
    }

    const choosePerson = (id, boolean) => {
        const body = {
            id: id,
            choice: boolean,
        }
        axios
        .post(urlChoosePerson, body)
        .then(() => {
            getProfileToChoose()
        })
        .catch((err) =>{
            console.log(err.data)
        })
    }

    return (
        <div>
            <CardContainer>
                <CardImg>
                  <Image>
                    <img src={profile.photo} alt={profile.name}/>
                  </Image>
                    <h2>{profile.name}, {profile.age}</h2>
                    <h3>{profile.bio}</h3>
                </CardImg>
                <CardButons>
                    <button onClick={() => choosePerson(profile.id, true)}>s2</button>
                    <button onClick={() => choosePerson(profile.id, false) }>X</button>
                </CardButons>
            </CardContainer>
        </div>
    )
}

export default CardHome;