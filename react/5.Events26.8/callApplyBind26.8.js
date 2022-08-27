person = {
    names : "jemes",
    dataFun: function (thing) {
        console.log(this.name + "hello dear" + thing);
    },
};

person.dataFun("world"); //jemes hello dear world

person.dataFun.call({name: "raj"}, "world");
person.dataFun("world");

var func = person.dataFun.bind({ name : "jemes"});

func("world");