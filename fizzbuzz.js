function fizzbuzz(start, end) {
  for (var i = start; i <= end; i++) {
      if (i % 15 === 0)
        console.log("fizzbuzz");
      else if (i % 5 === 0)
        console.log("buzz");
      else if (i % 3 === 0)
        console.log("fizz");
      else
        console.log(i);
  }
}

fizzbuzz(1, 1000);

