const response =confirm("This site uses cookies. Do you accept?");

if (response ){
    console.log("The user has accepted the cookies.");
}else{
    console.log("The user has declined the cookies.");
}

const darkMode=( ){
    const body= document.body;
    console.log("The dark mode button was clicked");
}