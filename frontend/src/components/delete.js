import React from 'react';
import { useHistory } from 'react-router-dom';

function Deleter(props) {

    let id = document.location.href.split(":")[3];
    let history = useHistory();

    fetch(`http://localhost:5000/api/idea/${id}`,{
        method: "DELETE"
    }).then(asnwer => asnwer.json())
    .then(response => {
        console.log(response);
        history.push('/userHome');
    });


    return (
        <div></div>
    );
}
export default Deleter