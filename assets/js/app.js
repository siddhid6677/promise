const cl = console.log;

const sweetAlert = (msg, icon) => {
    Swal.fire({
        title : msg,
        timer : 2500,
        icon : icon
    })
}

const hrCall = (skill) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .5 ? false : true;
            if(!error){
                resolve(`Candidate is short listed for 1st Tech Interview`)
            }else{
                reject(`Candidate is doesn't fir for the given profile`)
            }
        }, 2500);
    })
}

const firstTechInt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .5 ? false : true;
            if(!error){
                resolve(`Candidate is short listed for 2nd Tech Interview`)
            }else{
                reject(`Candidate is very poor in basics`)
            }
        }, 2000);
    })
}

const secondTechInt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .5 ? false : true;
            if(!error){
                resolve(`Candidate is short listed for 3rd Tech Interview`)
            }else{
                reject(`Candidate is strugling to write the code`)
            }
        }, 1500);
    })
}

const managerRound = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .5 ? false : true;
            if(!error){
                resolve(`Congrats, you are selected !!!`)
            }else{
                reject(`You are rejected`)
            }
        }, 1000);
    })
}

hrCall()
    .then((res) => {
        cl(res)
        sweetAlert(res, 'success')
        return firstTechInt()
    })
    .then((res) => {
        cl(res)
        sweetAlert(res, 'success')
        return secondTechInt()
    })
    .then((res) => {
        cl(res)
        sweetAlert(res, 'success')
        return managerRound()
    })
    .then((res) => {
        cl(res)
        sweetAlert(res, 'success')
    })
    .catch((err) =>{
        cl(err)
        sweetAlert(err, 'error')
    })


    