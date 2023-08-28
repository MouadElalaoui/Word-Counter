document.addEventListener('DOMContentLoaded', function () {
    const userInput = document.getElementById('userInput');
    const countButton = document.getElementById('countButton');
    const result = document.getElementById('result');

    countButton.addEventListener('click', function () {
        const text = userInput.value;
        const wordCount = countWords(text);
        result.textContent = `The text contains ${wordCount} words.`;
    });

    function countWords(text) {
        const words = text.split(/\s+/).filter(word => word !== '');
        return words.length;
    }
});


/* this script was first coded as a python code due to the websites owner 
lack of knowledge about javascript , I hope that by the time i am reading this
the next time , I will be able to write better Javascript and python code .
Here is the python code transfered to Javascript by chat-gpt .

----------------------------------------------------------------
#get user's input with a function
def  get_user_input():
 user_input = input("Enter your TEXT and we'll do the REST !")
 return user_input

#count the words in text with another functiob
def count_words(user_input):
    words_number = user_input.split()
    print(len(words_number))
    return words_number

#call the functions
user_input = get_user_input()
count_words(user_input)

-------------------------------------------------------------

Very glad to add this Website to my Websites collection , and I hope that 
this website has been useful to at least 1 person in the world */


