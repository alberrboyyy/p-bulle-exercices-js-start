//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {  
  if (message.trim() === "") {
    return "Fine. Be that way!";
  }

  const hasLetters = /[a-zA-Z]/.test(message.trim());
  const isYelling = hasLetters && message.trim() === message.trim().toUpperCase();

  if (isYelling && message.trim().endsWith("?")) {
    return "Calm down, I know what I'm doing!";
  }

  if (isYelling) {
    return "Whoa, chill out!";
  }

  if (message.trim().endsWith("?")) {
    return "Sure.";
  }

  return "Whatever.";
};