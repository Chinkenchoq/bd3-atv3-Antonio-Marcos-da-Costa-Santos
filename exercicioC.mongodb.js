use('BD3-NoSQL-AtlasMongoDB');

db['bd3-nosql-atv1'].updateOne(
    {cpf:'32145678909'},
    {$set:{nome:'Alexandre Pato'}}
);

