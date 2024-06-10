import React, { useEffect } from 'react'
import { useAuth } from '../../hooks'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;

  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn) navigate('/sign-in')
  }, [isLoggedIn])

  return (
    <div>Profile</div>
  )
}

export default Profile