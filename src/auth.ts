import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";


export const authOptions : NextAuthOptions = {

    pages :{
        signIn:"/login"
    },

    providers:[
        Credentials({
            name:"Credentials",
            credentials:{
                email:{},
                password:{},
            },
            authorize:async (credentials)=>{
                const response = await fetch(`${process.env.API}/auth/signin`,{
                    method:"POST",
                    headers:{"Content-type":"application/json"},
                    body:JSON.stringify({
                        email:credentials?.email,
                        password:credentials?.password
                    })
                })
                const payload = await response.json()
                console.log(payload)

                if(payload.message=="success"){
                    const decodedToekn : {id:string} = jwtDecode(payload.token);
                    console.log("MyTokennnnn",decodedToekn)
                    return {
                        id:decodedToekn.id,
                        user:payload.user, // user = { name: 'amr', email: 'amr22@yahoo.com', role: 'user' },
                        token:payload.token
                    }
                }
                else {
                     throw new Error(payload.message  ||"worng credentials")
                }

            }
        })
    ],


    callbacks:{
        async jwt({ token, user }) {
            if(user){
                token.user =  user.user,  // { name: 'amr', email: 'amr22@yahoo.com', role: 'user' },
                token.token = user.token
            }
            return token // {user:{ name: 'amr', email: 'amr22@yahoo.com', role: 'user' } , token:"erferferff"}
    },


     async session({ session, token }) {
        session.user = token.user  //{ name: 'amr', email: 'amr22@yahoo.com', role: 'user' },
      return session
    }


    }




}




