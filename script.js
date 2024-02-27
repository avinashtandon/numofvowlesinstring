function countVowels(str) {
    // Convert the string to lowercase to make the comparison case-insensitive
    str = str.toLowerCase();
    
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Initialize a variable to store the count of vowels
    let count = 0;
    
    // Iterate through each character in the string
    for (let char of str) {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        // Increment the count if it's a vowel
        count++;
      }
    }
    
    // Return the total count of vowels in the string
    return count;
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  const result = countVowels(inputString);
  console.log(`The string "${inputString}" contains ${result} vowels.`);
  