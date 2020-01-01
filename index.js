const program = require('commander');

program
  .option('-x, --xxx', 'is x')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');
program
  .command('add')
  .description('add a task')
  .action((...args) => {
    let words = args.slice(0, -1).join(' ')
    console.log(words);
  });
program.parse(process.argv);
console.log(program.xxx)
// if (program.debug) console.log(program.opts());
// console.log('pizza details:');
// if (program.small) console.log('- small pizza size');
// if (program.pizzaType) console.log(`- ${program.pizzaType}`);