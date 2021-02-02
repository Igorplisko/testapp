import * as axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png'







class Users extends React.Component {
   componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            this.props.setUsers(response.data.items);
         });
   }

   render() {

      let pagesCount = this.props.totalUsersCount / this.props.pageSize;
      let pages = [];
      for (let i = 0; i <= pagesCount; i++) {
         pages.push(i);
      }

      return <div>
         <div>
            {pages.map(p => {
               <span className={styles.selectedPage} >{p}</span>
            })}

            <span> 1</span>
            <span className={styles.selectedPage}> 2</span>
            <span> 3</span>
            <span> 4</span>
            <span> 5</span>
         </div>

         {
            this.props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                  </div>
                  <div>
                     {u.followed
                        ? <button onClick={() => {
                           this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                           this.props.follow(u.id)
                        }}>Follow</button>}

                  </div>
               </span>
               <span>
                  <span>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                  </span>
                  <span>
                     <div>{"u.location.country"}</div>
                     <div>{"u.location.city"}</div>
                  </span>
               </span>
            </div>)
         }
      </ div >
   }
}

export default Users;



//! render(): рендеринг компонента 

//! componentDidMount(): вызывается после рендеринга компонента. Здесь можно выполнять запросы к удаленным ресурсам


