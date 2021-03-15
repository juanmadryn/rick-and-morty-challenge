const count = (text: string, char: string): number => {
    return (text.match(new RegExp(char, "gi"))||[]).length;
  };
  
  export { count };