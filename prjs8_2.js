
function Computer(type, processor, ram, hd) {
    this.type = type,
    this.processor = processor,
    this.ram = ram,
    this.hd = hd
}

Computer.prototype.describe = function() {
    document.write("<p>" + this.type + ":</p>");
    document.write("Processor: " + this.processor + "<br>");
    document.write("RAM: " + this.ram + "<br>");
    document.write("Hard Disk: " + this.hd + "</p>");
}

let work_computer = new Computer("Work", "2GHZ", "8GB", "1TB");
let home_computer = new Computer("Home", "2GHZ", "4GB", "500GB");
let gaming_computer  = new Computer("Gaming", "4GH", "16GB", "2TB"); 

document.write("<h1>Javascript Constructor/Prototype</h1>")
work_computer.describe();
home_computer.describe();
gaming_computer.describe();