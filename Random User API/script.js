const api_url = "https://randomuser.me/api/";
async function getUser() {
    //Making an API Call (request)
    //and getting the response back
    const response = await fetch(api_url);

    //parsing data to JSON format
    const data = await response.json();
    console.log(data.results)

    const user = data.results[0];
    // console.log(user);
    let {title, first, last} = user.name;
    // console.log(title, first, last);
    let {age} = user.dob;
    // console.log(age);
    let {gender,email,phone} = user;
    // console.log(gender,email,phone);
    let {large} = user.picture;
    // console.log(large);
    let {city, state, country} = user.location;
    // console.log(city, state, country);
    let fullname = title + ". " + first + ' ' + last;
    // console.log(fullname);

    //Displaying the data
    document.getElementById("fullname").innerHTML = fullname;
    document.getElementById("email").href = "mailto:"+ email;
    document.getElementById("email").innerHTML = email;
    document.getElementById("age").innerHTML = age;
    document.getElementById("phone").href = "tel:"+ phone;
    document.getElementById("phone").innerHTML = phone;
    
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("location").innerHTML = city + ", " + state;
    document.getElementById("country").innerHTML = country;

    let image = document.createElement("img");
    let img_div = document.getElementById('user-image');
    image.src = large;
    img_div.appendChild(image);

    // document.getElementById("user-image").src = large;


}

getUser();