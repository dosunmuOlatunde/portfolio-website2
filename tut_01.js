const textarea_El = document.querySelector(".textarea")
const words_El = document.querySelector(".stat__number--words")
const characters_El = document.querySelector(".stat__number--characters")
const twitter_numb = document.querySelector(".stat__number--twitter")
const facebook_numb =  document.querySelector(".stat__number--facebook")

const twitter_value = 10
const facebook_value = 5


textarea_El.addEventListener("input" , function(){
    const word = textarea_El.value
    const wordcount = word => {
        return word.split(' ').length
    }
    word_numb = wordcount(word)
    console.log(word_numb)

    words_El.textContent = word_numb

    const characters_length  = textarea_El.value.length
    console.log(characters_length)
    characters_El.textContent =+ characters_length

    const twitter_count = twitter_value - characters_length
    twitter_numb.textContent= twitter_count

    if(twitter_count< 0){
        twitter_numb.style.color='red';
    }

    
    const facebook_count = facebook_value - characters_length
    facebook_numb.textContent= facebook_count

    if(facebook_count< 0){
        facebook_numb.style.color='red';
    }

}











)
