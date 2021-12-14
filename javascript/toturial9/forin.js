let people = [
    {
        name: 'Haktan',
        age:23

    },
    {
        name: 'Ender',
        age:22

    },
    {
        name: 'Bilal',
        age:24

    }
]

for(singleobject in people){
    people[singleobject].age=99
    people[singleobject].name = people[singleobject].name.toLocaleUpperCase()
    console.log(people[singleobject])
}






let student1 = {
    id:1,
    name:'joe dalton'
}
