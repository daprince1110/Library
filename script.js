//I could have made the code more neat and fancy
//but this project was too easy. Would rather move on

const myLibrary = [];
const bookList = document.querySelector('.book-list')
let books = document.querySelectorAll('.book')
const addBookBtn = document.querySelector("#add-book-btn")
const addBookFrm = document.querySelector("#book-dialog")
const addBookSave = document.querySelector("#save-book-btn")
const addBookClose = document.querySelector("#close-dialog")


function Book(name, author, genre, text) {
  this.name = name;
  this.author = author;
  this.genre = genre;
  this.text = text;
}

function clearBooks(){
  bookList.innerHTML = '';
}

function addBooks(){
  for (let x of myLibrary){
    // Create the book div
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    // Create and append the heading
    const title = document.createElement("h2");
    title.textContent = x.name;
    bookDiv.appendChild(title);

    // Create and append the author paragraph
    const authorPara = document.createElement("p");
    const authorStrong = document.createElement("strong");
    authorStrong.textContent = "Author:";
    authorPara.appendChild(authorStrong);
    authorPara.appendChild(document.createTextNode(x.author));
    bookDiv.appendChild(authorPara);

    // Create and append the genre paragraph
    const genrePara = document.createElement("p");
    const genreStrong = document.createElement("strong");
    genreStrong.textContent = "Genre:";
    genrePara.appendChild(genreStrong);
    genrePara.appendChild(document.createTextNode(x.genre));
    bookDiv.appendChild(genrePara);

    // Append the bookDiv to the body or any other container
    bookList.appendChild(bookDiv);

    books = document.querySelectorAll('.book')

  }

  books = document.querySelectorAll('.book')
  books.forEach(function(x){
    x.addEventListener("click",  () => {
      let container = document.querySelector("#storyContainer")
      container.style = "display:block;"
      container.querySelector('div').textContent = x.querySelector('h2').textContent;
      index = 0;
      stories = myLibrary.find(b => b.name == x.querySelector('h2').textContent).text;
    })
  })
}

function addBooksToLibrary() {
  for (let i = 0; i < arguments.length; i++){
    myLibrary.push(arguments[i]);
  }

  clearBooks()
  addBooks()
  books = document.querySelectorAll('.book')
}

addBookBtn.addEventListener("click", function(){
  addBookFrm.style.display = "block";
})

addBookSave.addEventListener('click', function(){
  let name = addBookFrm.querySelector("#book-title")
  let author = addBookFrm.querySelector("#book-author")
  let genre = addBookFrm.querySelector("#book-genre")
  let book = new Book(name.value, author.value, genre.value, null)
  addBooksToLibrary(book)
  addBookClose.click()
})

addBookClose.addEventListener('click', function(){
  addBookFrm.querySelector("#book-title").value = ''
  addBookFrm.querySelector("#book-author").value = ''
  addBookFrm.querySelector("#book-genre").value = ''
  addBookFrm.style.display = "none";

})



function nextStory(){
  if (index < stories.length) {
    document.getElementById('story').innerText = stories[index];
    index++;
  } else {
      document.getElementById('story').innerText = "The End.";
  }
}

function closeStory() {
  document.getElementById('storyContainer').style.display = 'none';
}

let Book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", [
  "In the summer of 1922, Nick Carraway, a young bond salesman from the Midwest, moves to West Egg, Long Island, hoping to build a career in the financial industry.",
  "Nick rents a modest house next to the grand mansion of Jay Gatsby, an enigmatic millionaire known for throwing lavish parties filled with celebrities, politicians, and socialites.",
  "Across the bay, in East Egg, live Nick’s cousin Daisy Buchanan and her husband, Tom Buchanan, a wealthy and arrogant man who comes from old money and holds racist and sexist views.",
  "Nick visits the Buchanans for dinner, where he meets Jordan Baker, a professional golfer with a reputation for dishonesty. There, he learns that Tom is having an affair with a woman in New York.",
  "Tom’s mistress is Myrtle Wilson, the wife of George Wilson, a struggling mechanic who owns a rundown garage in the desolate 'valley of ashes' between West Egg and New York City.",
  "Tom takes Nick to meet Myrtle in the city, where she hosts a small, raucous party at an apartment Tom keeps for their affair. Myrtle gets drunk and taunts Tom by mentioning Daisy’s name, leading Tom to violently break her nose.",
  "Nick receives a mysterious invitation to one of Gatsby’s extravagant parties, where guests drink illegally obtained alcohol and dance to jazz music in a display of 1920s excess.",
  "At the party, Nick is surprised to finally meet Gatsby, who is surprisingly warm and friendly. Gatsby seems to take a particular interest in Nick and calls him 'old sport' repeatedly.",
  "Jordan later tells Nick that Gatsby has a mysterious past and that many believe he might be involved in illegal activities such as bootlegging or even murder.",
  "Gatsby and Nick spend more time together, and Gatsby eventually reveals that he has been in love with Daisy for years. They had a romance before World War I, but she married Tom while Gatsby was overseas.",
  "Gatsby bought his mansion in West Egg and throws his extravagant parties in the hopes that Daisy might one day wander in and find him again.",
  "Gatsby asks Nick to arrange a meeting between him and Daisy. Nick agrees and invites Daisy to his cottage, where Gatsby and Daisy reunite.",
  "At first, Gatsby is nervous, but as they reconnect, the old spark between them reignites, and soon they begin an affair.",
  "Gatsby takes Daisy on a tour of his mansion, showing off his wealth and luxurious possessions, including his collection of expensive shirts, which makes Daisy cry with emotion.",
  "Gatsby believes he can turn back time and recreate the past, insisting that Daisy never truly loved Tom and that she will leave him.",
  "As Gatsby and Daisy continue their affair, Tom begins to suspect that something is happening between them.",
  "One day, Gatsby, Daisy, Nick, Jordan, and Tom drive into New York City together on a sweltering summer afternoon. They rent a suite at the Plaza Hotel, where tensions explode.",
  "Tom confronts Gatsby, exposing his illegal business dealings with Meyer Wolfsheim, a known criminal and bootlegger.",
  "Tom demands that Daisy admit she never loved Gatsby. Under pressure, Daisy hesitates and ultimately confesses that she did love Tom at one point, devastating Gatsby.",
  "Realizing that he has won, Tom smugly tells Daisy to return home with Gatsby, knowing she will never leave him.",
  "That night, as Daisy and Gatsby drive back, Daisy is at the wheel when Myrtle Wilson runs into the street, mistakenly believing that Tom is driving. Daisy accidentally hits and kills her.",
  "Gatsby, still devoted to Daisy, insists that he will take the blame for Myrtle’s death, even though Daisy was the one driving.",
  "George Wilson is grief-stricken and, after being misled by Tom, believes Gatsby was the one who killed his wife.",
  "Wilson finds Gatsby floating in his pool at his mansion, staring at the sky and waiting for a call from Daisy that will never come.",
  "Wilson shoots Gatsby, killing him, before turning the gun on himself.",
  "Nick is devastated to find that despite Gatsby’s wealth and the countless people who attended his parties, almost no one comes to his funeral.",
  "The only attendees are Nick, Gatsby’s father (who reveals that Gatsby’s real name was James Gatz), and a few servants.",
  "Nick realizes that Gatsby spent his entire life chasing an unattainable dream—Daisy, who ultimately chose security and wealth over love.",
  "Nick ends his relationship with Jordan, disillusioned by the superficiality and carelessness of the upper class.",
  "Before leaving New York, Nick visits Tom and Daisy’s house and finds that they have already left, escaping responsibility for the damage they have caused.",
  "As Nick prepares to return to the Midwest, he reflects on Gatsby’s undying hope and dreams, symbolized by the green light at the end of Daisy’s dock.",
  "The novel ends with Nick’s famous words: 'So we beat on, boats against the current, borne back ceaselessly into the past.'"
])
let Book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", [
  "Set in the 1930s in the fictional town of Maycomb, Alabama, To Kill a Mockingbird follows the life of Jean Louise 'Scout' Finch, a young, curious, and outspoken girl growing up in a racially divided society.",
  "Scout lives with her older brother, Jeremy 'Jem' Finch, and their widowed father, Atticus Finch, a well-respected lawyer known for his integrity, wisdom, and moral commitment to justice.",
  "The children befriend Charles Baker 'Dill' Harris, a boy who visits Maycomb every summer and shares their adventurous and imaginative spirit.",
  "The trio becomes fascinated with their reclusive neighbor, Arthur 'Boo' Radley, a mysterious man who never leaves his house, leading to wild rumors that he is dangerous and mentally unstable.",
  "Despite local myths portraying Boo as a violent figure, Scout, Jem, and Dill’s curiosity grows, and they attempt to lure him outside, even daring each other to touch the Radley house.",
  "Scout and Jem start finding small gifts—a pair of carved soap dolls, gum, a pocket watch, and other trinkets—hidden inside the knothole of an old oak tree near the Radley house.",
  "The children begin to suspect Boo Radley is the one leaving them these gifts as a quiet gesture of friendship, though they never see him.",
  "One winter, Maycomb experiences an unusual snowfall, and Miss Maudie's house catches fire. As Scout watches in the cold, someone silently drapes a blanket over her shoulders. Later, she realizes it was Boo Radley.",
  "Meanwhile, Atticus Finch takes on a controversial case, defending Tom Robinson, a Black man falsely accused of raping Mayella Ewell, a poor white woman.",
  "Atticus’s decision to defend Tom earns him the scorn of the racist white community, and Scout and Jem face ridicule and insults from their peers.",
  "One day, Scout gets into a fight with her cousin Francis for calling Atticus a 'n****r-lover,' showing how deeply racism is ingrained in the town’s children.",
  "Atticus, wanting to teach his children the importance of moral courage, gives Jem a rifle but tells him that it is a sin to kill a mockingbird—explaining that mockingbirds only bring beauty and harm no one.",
  "Mrs. Dubose, a mean-spirited elderly woman, constantly insults the children and their father. As punishment for destroying her flowers, Jem is forced to read to her daily.",
  "After Mrs. Dubose dies, Atticus reveals that she was battling a morphine addiction, and her decision to die free of the drug made her the bravest person he ever knew.",
  "As Tom Robinson’s trial approaches, tensions in Maycomb escalate, and one night, Atticus sits outside the jailhouse to prevent a lynch mob from attacking Tom.",
  "Scout, Jem, and Dill secretly follow Atticus, and when the mob arrives, Scout innocently talks to one of the men, reminding him of his humanity. Embarrassed, the mob disperses without violence.",
  "The trial begins, and despite clear evidence that Tom is innocent—Mayella’s injuries suggest her father Bob Ewell beat her, not Tom—the all-white jury convicts Tom.",
  "Scout and Jem struggle to comprehend the deep-seated racism that led to the unjust verdict, with Jem particularly devastated by the unfairness of the legal system.",
  "Tom later tries to escape from prison and is shot seventeen times by the guards, a tragic symbol of the brutal reality Black men face in the South.",
  "Bob Ewell, humiliated by the trial, vows revenge on those he believes wronged him—Atticus, Judge Taylor, and even Tom’s widow, Helen Robinson.",
  "As Halloween approaches, Maycomb hosts a school pageant, and Scout, dressed as a ham for the performance, walks home with Jem through the dark woods afterward.",
  "On their way home, Bob Ewell ambushes them in the dark, attacking Jem and attempting to kill Scout.",
  "In the struggle, an unknown figure intervenes, rescuing the children and carrying Jem home. Scout later realizes their savior is Boo Radley.",
  "Bob Ewell is found dead with a knife in his ribs, and the town sheriff, Heck Tate, insists that Ewell fell on his own knife, though it is clear Boo killed him to protect the children.",
  "Understanding Boo’s fragile state, Atticus and Scout agree that exposing Boo would be cruel, likening him to a mockingbird—an innocent being who did no harm and only helped others.",
  "Scout finally meets Boo face-to-face and sees him not as a mysterious figure but as a gentle, quiet man who had watched over them for years.",
  "She walks Boo home and, standing on his porch, realizes how much she had misunderstood him, seeing the world through his eyes for the first time.",
  "Scout reflects on her father’s lesson that true understanding comes from stepping into another person’s shoes and seeing life from their perspective.",
  "The novel ends with Atticus reading to Scout as she falls asleep, reinforcing the idea that goodness exists even in a flawed and unjust world."
]
)
let Book3 = new Book("1984", "George Orwell", "Dystopian", [
  "Set in a dystopian future, the novel takes place in Airstrip One (formerly Britain), a province of the totalitarian superstate Oceania, ruled by the Party and its leader, Big Brother.",
  "The protagonist, Winston Smith, works at the Ministry of Truth, where his job is to alter historical records to match the Party’s ever-changing version of reality.",
  "Oceania is controlled by constant surveillance, with telescreens in every home and workplace, monitoring citizens’ every move and thought.",
  "The Party enforces strict rules, suppressing individuality and independent thinking through propaganda, censorship, and Newspeak, a language designed to eliminate rebellious thoughts.",
  "Winston secretly despises the Party and dreams of rebellion, despite knowing that even the mere thought of defying Big Brother is a punishable crime.",
  "He begins keeping a secret diary, an act of thoughtcrime, in which he writes rebellious ideas, including his hatred for Big Brother.",
  "Winston’s daily life is filled with Party-controlled events, such as the Two Minutes Hate, where citizens are encouraged to express their rage toward the Party’s enemies, particularly the elusive rebel leader, Emmanuel Goldstein.",
  "Winston notices Julia, a young woman who works in the Fiction Department, and initially believes she is a loyal Party member and possibly a spy.",
  "One day, Julia secretly slips Winston a note that reads 'I love you,' revealing that she too secretly opposes the Party.",
  "They begin a forbidden love affair, meeting in hidden locations to escape Party surveillance, first in the countryside and later in a rented room above an old shop in the prole district.",
  "Their relationship symbolizes rebellion, as the Party forbids emotional bonds that could undermine loyalty to Big Brother.",
  "As their affair continues, they are approached by O'Brien, a high-ranking Party member whom Winston suspects to be part of the underground resistance known as the Brotherhood.",
  "O'Brien invites Winston and Julia to his apartment, where he confirms the existence of the Brotherhood and gives them Emmanuel Goldstein’s book, which exposes the Party’s manipulation and control over society.",
  "Winston and Julia read the book together, learning about the perpetual war between Oceania, Eastasia, and Eurasia, and how the Party maintains power through psychological control and manufactured enemies.",
  "Shortly after, Winston and Julia are captured in their secret hideout by the Thought Police, revealing that their refuge had been under surveillance all along.",
  "Mr. Charrington, the seemingly harmless shopkeeper, is revealed to be an agent of the Thought Police, exposing their betrayal.",
  "Winston and Julia are separated and taken to the Ministry of Love, where they are subjected to brutal interrogation and torture.",
  "O'Brien, whom Winston believed to be a fellow rebel, is actually a loyal Party official and personally oversees Winston’s psychological and physical torture.",
  "Through relentless pain and manipulation, O'Brien forces Winston to accept Party ideology, including the idea that '2 + 2 = 5' if the Party says so.",
  "Winston resists at first but eventually breaks under the intense torture, confessing to various fabricated crimes.",
  "In Room 101, Winston faces his greatest fear—rats. O'Brien straps a cage of hungry rats to his face, threatening to let them eat him alive.",
  "In desperation, Winston betrays Julia, screaming for them to torture her instead, proving that under enough pressure, love and loyalty are meaningless.",
  "After his spirit is broken, Winston is released back into society, now a hollow shell of his former self.",
  "He encounters Julia again, and they admit that their love is dead, both having betrayed each other under torture.",
  "Winston spends his days drinking gin and numbly accepting Party propaganda, fully reprogrammed and no longer capable of independent thought.",
  "The novel ends with Winston gazing at a poster of Big Brother, finally accepting his fate as he realizes, with absolute certainty, that he 'loves Big Brother.'"
]
)

addBooksToLibrary(Book1,Book2, Book3)


console.log(myLibrary)