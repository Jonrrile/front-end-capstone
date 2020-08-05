import React, { useState, useEffect } from 'react'
import UserCard from './UserCard';
import UserManager from '../modules/UserManager'




const UserList = (props) => {
    const [user, setUser] = useState([]); //initial declaration utilizing state for empty array
    const id = sessionStorage.getItem("activeUser")
    const getUser = (id) => {
        return UserManager.getUser(id).then(userFromAPI => {
            setUser(userFromAPI) //fetch call from API
        });
    };

    useEffect(() => {
        getUser(id);  //look into effect more here
    }, []);

    return (
        <div>
            <div>
                
            <UserCard 
            key={user.id}
            user={user}
            {...props} />
                        
                         
                        )
                    
               
            </div>
            </div>
        
    );
};

export default UserList