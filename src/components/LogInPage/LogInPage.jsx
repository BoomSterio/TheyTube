import React from 'react'
import GoogleLogin from 'react-google-login'
import './LogInPage.css'
import google from '../../assets/images/google.png'
import {Redirect} from 'react-router'

const LogInPage = () => {
    const handleSuccessAuth = (r) => {
        console.log(r)
        const {name, googleId, imageUrl} = r.profileObj
        const authUser = {
            name: name,
            googleId: googleId,
            avatar: imageUrl,
            isAuth: true
        }

        sessionStorage.setItem('authUser', JSON.stringify(authUser))
        window.location = '/'
    }
    const handleFailureAuth = (r) => {
        console.log(r)
    }

    const isAuth = JSON.parse(sessionStorage.getItem('authUser')).isAuth

    if(isAuth) {
        return <Redirect to={'/'}/>
    }

    return (
        <div className={'loginPage'}>
            <div className="loginPage__window">
                <img className={'loginPage__gLogo'} src={google} alt={'googleLogo'}/>
                <h3>Sign In With Google</h3>
                <h4>TheyTube</h4>
                <GoogleLogin
                    className={'loginPage__button'}
                    clientId={'593308672456-ni0t53ifvjhijs2hgm674uapmvsvg0el.apps.googleusercontent.com'}
                    buttonText={'Sign in'}
                    onSuccess={handleSuccessAuth}
                    onFailure={handleFailureAuth}
                />
            </div>
        </div>
    )
}

export default LogInPage