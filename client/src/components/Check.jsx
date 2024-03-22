import React from 'react'

export default function Check() {

    function a() {
        return function(val) {
            console.log(val);
            return function(cval){
                console.log(cval);
            }
        }
    }

    a()("sangav")('lavanya');


    function recursion(){
        console.log(Math.random());
        setTimeout(recursion, 2000)
    }

    recursion();

    return (

        <>
            <p>Chek val</p>
        </>
    )
}
