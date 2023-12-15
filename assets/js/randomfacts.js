// List of facts to input into the fun facts section during the quiz
var facts = [
  "The world's largest gingerbread house was built in Texas in 2013, measuring 60 feet long, 42 feet wide, and 10 feet tall.",
  "In Ukraine, it's a tradition to decorate Christmas trees with spider webs for good luck.",
  "The first recorded Christmas tree was in 1510 in Latvia.",
  "In Catalonia, Spain, there's a Christmas tradition called 'Caga Tió,' where a log is painted with a smiling face and 'poops' out presents when hit with sticks.",
  "The record for the most lights on a Christmas tree is 194,672, set in 2015 in Australia.",
  "Alabama was the first state in the U.S. to officially recognize Christmas in 1836.",
  "The largest gathering of Santa Claus impersonators took place in 2014 in Ireland, with 1,792 participants.",
  "J.K. Rowling revealed that she always writes a new book for her children as a Christmas present.",
  "The tradition of kissing under the mistletoe dates back to ancient Norse mythology.",
  "The concept of Santa Claus has its roots in the 4th-century Greek bishop, St. Nicholas.",
  "The world's most expensive Christmas tree was valued at $11 million. It was decorated with diamonds, sapphires, and other precious stones.",
  "The town of Bethlehem, where Jesus was born, means 'House of Bread' in Hebrew.",
  "The world's first printed Christmas card was created in 1843 in London by Sir Henry Cole.",
  "The word 'Xmas' comes from the Greek alphabet. The letter 'X' is a symbol for Christ.",
  "The world's largest Christmas stocking measured 106 feet and 9 inches long, 49 feet and 1 inch wide.",
  "In the Netherlands, Sinterklaas (similar to Santa Claus) arrives by boat from Spain, not by sleigh.",
  "The famous poem 'Twas the Night Before Christmas' was first published anonymously in 1823.",
  "The poinsettia, a popular Christmas plant, is named after Joel Poinsett, the first U.S. ambassador to Mexico, who introduced the plant to the U.S. in the 1820s.",
  "The average Christmas tree grows for about 15 years before it is sold.",
  "The tradition of Christmas caroling began in medieval Europe.",
  "The colors red and green are traditionally associated with Christmas because they are the colors of holly berries and leaves.",
  "The first Christmas celebrated in space was in 1969 during the Apollo 8 mission.",
  "In Sweden, it's common to watch Donald Duck cartoons on Christmas Eve.",
  "The town of North Pole, Alaska, receives thousands of letters addressed to Santa Claus each year.",
  "The Rockefeller Center Christmas Tree in New York City is recycled and used to build homes for Habitat for Humanity.",
  "Coca-Cola played a significant role in shaping the modern image of Santa Claus with its advertising in the 1930s.",
  "The Christmas wreath has its origins in ancient Rome, where wreaths were used as a sign of victory.",
  "The world's largest advent calendar was created in 2007 in Austria, using the windows of a 220-foot-tall power plant.",
  "In Germany, it's a tradition to hide a pickle ornament in the Christmas tree, and the child who finds it gets an extra gift.",
  "The tradition of the Yule Log dates back to ancient times when a large log was burned to ward off evil spirits.",
    
];

function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
}