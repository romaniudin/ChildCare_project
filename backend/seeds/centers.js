
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('centers_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('centers_table').insert([
        { center_name: '1st Ave Montessori Licensed Family Child Care', age_group: '19-36 months', type: 'FT', cost:'890', availability: true , neighbourhood: '3544 West 1st Avenue', contacts: 'almatallo@hotmail.com, tel:604-879-0224' },
        { center_name: '3 Corners Child Care Centre', age_group: '2.5-5 years', type: 'PT', cost:'600', availability: true, neighbourhood: '1 Kingsway', contacts: 'some@email.com, tel:604-257-3061' },
        { center_name: 'ABC University Daycare', age_group: '5-12 years', type: 'PT', cost:'450', availability: false, neighbourhood: '4595 West 8th Avenue', contacts: 'peter.werner@gmail.com, tel:604-228-5885' },
        { center_name: 'Amys Licensed Family Child Care', age_group: '0-18 months', type: 'PT', cost:'536', availability: true, neighbourhood: '7715 Muirfield Drive', contacts: 'center@gmail.com, tel:604-301-1033' },
        { center_name: 'Cedar Cottage Preschool', age_group: '2.5-5 years', type: 'FT', cost:'1000', availability: true , neighbourhood: '3455 West King Edward Ave', contacts: 'ccnh@cedarcottage.org, tel:604-874-4231' },
        { center_name: 'Kittiwake Group Day Care', age_group: '0-18 months', type: 'FT', cost:'970', availability: false , neighbourhood: '2815 Revelstoke Court', contacts: 'music@yahoo.com, tel:234561' },
        { center_name: 'Little Creations Montessori Preschool', age_group: '2.5-5 years', type: 'FT', cost:'850', availability: true , neighbourhood: '4474 Rupert Street', contacts: 'play@gmail.com, tel:778-379-3303' },
        { center_name: 'Creekview Tiny Tots - toddler', age_group: '19-36 months', type: 'FT', cost:'1200', availability: true, neighbourhood: '401-345 Robson Street', contacts: 'creekviewtiny@yahoo.ca, tel:604-742-0212' },
        { center_name: 'Quince Blossoms Licensed Family Child Care', age_group: '5-12 years', type: 'PT', cost:'450', availability: false , neighbourhood: '1859 West 15th Avenue', contacts: 'max@gmail.com, tel:604-704-1271' },
        { center_name: 'Service De Garde Les Copains', age_group: '5-12 years', type: 'FT', cost:'900', availability: false, neighbourhood: '604-437-0255', contacts: 'info@gmail.com, tel:3575 Kaslo Street' }
      ]);
    });
};
