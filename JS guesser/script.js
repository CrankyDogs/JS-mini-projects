const randomNum = Math.floor(Math.random() * 21);
console.log(randomNum);

for(i=1; i<80; i++){
    const randomNum = Math.floor(Math.random() * 21);
console.log(randomNum);
}

const btn = document.querySelector(".btn");
const message = document.querySelector(".message")
btn.addEventListener("click", () => {
    const In = document.querySelector(".input");
    const OurValue = Number(In.value);
    if (OurValue > randomNum){
        message.textContent = "Your guess is high"
    }else if(OurValue < randomNum){
        message.textContent = "Your guess is low"
    }else{
        message.textContent = `You guessed it right, it was ${randomNum}`
    }
});