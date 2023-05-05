/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  const madLibsEditDiv = document.querySelector('.madLibsEdit');
  const madLibsPreviewDiv = document.querySelector('.madLibsPreview');
  const regex = /(\w+)\[(\w+)\]/g;
  let editedStory = '';
  let previewStory = '';
  const title = document.createElement('h1');
  title.innerHTML = 'The Adventures of Vergil Sprada';
  title.classList.add('title');
  document.body.insertBefore(title, madLibsEditDiv);
  rawStory.split(regex).forEach((str, index) => {
    if (index % 3 === 0) {
      editedStory += str;
      previewStory += str;
    } else if (index % 3 === 1) {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = str;
      input.placeholder = str;
      input.classList.add('liveDisplay');
      editedStory += input.outerHTML;
      previewStory += `<span class="liveDisplay" data-input-name="${str}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
    }
  });
  madLibsEditDiv.innerHTML = editedStory;
  const previewParagraph = document.createElement('p');
  previewParagraph.innerHTML = previewStory;
  madLibsPreviewDiv.appendChild(previewParagraph);
  const liveDisplayInputs = document.querySelectorAll('.liveDisplay');
  liveDisplayInputs.forEach((input) => {
    input.addEventListener('input', () => {
      const inputName = input.name;
      const inputValue = input.value;
      const previewSpans = document.querySelectorAll(`.liveDisplay[data-input-name="${inputName}"]`);
      previewSpans.forEach((span) => {
        span.innerHTML = inputValue;
      });
    });
  });
  return {}; 
}
  /**
   * All your other JavaScript code goes here, inside the function. Don't worry about
   * the `then` and `async` syntax for now.
   *
   * NOTE: You should not be writing any code in the global namespace EXCEPT
   * declaring functions. All code should either:
   * 1. Be in a function.
   * 2. Be in .then() below.
   *
   * You'll want to use the results of parseStory() to display the story on the page.
   */
  getRawStory()
    .then(parseStory)
    .then((processedStory) => {
      console.log(processedStory);
    });