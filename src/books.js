import {generate as id} from 'shortid';

export const categories = [
    {id:1, title: 'Fantastic'},
    {id:2, title: 'Programming'}
]

export  const defaultBooks = [
    {id: id(), title: 'Harry Potter', categoryId: 1,  description: 'Fusce luctus maximus consectetur. Nam consectetur tincidunt semper. Curabitur et tortor tellus. Nullam non elementum enim. Fusce dui nibh, eleifend eget augue non, dictum sagittis lorem. Nullam ut ligula libero. Sed placerat, ligula dapibus lacinia consectetur, augue libero dapibus libero, nec interdum eros nisl eu enim.' },
    {id: id(), title: 'Learn React', categoryId: 2,  description:'Curabitur nec rhoncus sem. Phasellus varius purus non ipsum euismod, sit amet tincidunt tellus porta. Praesent ut diam dictum, malesuada nisi ut, bibendum sem. Etiam rutrum, arcu non consequat euismod, ex nibh commodo nulla, eu iaculis leo lacus sit amet massa. Curabitur porttitor iaculis odio, a placerat metus aliquet sed. Sed efficitur, risus at imperdiet laoreet, nunc felis porttitor metus, accumsan mattis orci tellus a velit. Nullam fringilla turpis nisi, vitae vehicula est lobortis at. '},
    {id: id(), title: 'Learn Redux',  categoryId: 2, description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ullamcorper massa ac risus rhoncus, et luctus purus blandit. Vestibulum auctor sed quam vitae finibus. Maecenas et ullamcorper enim. Sed dictum leo ante, a viverra felis fringilla et. '},
    {id: id(), title: 'Using PHP for create CMS', categoryId: 2, description:' Etiam sed mauris et mi bibendum consectetur. Fusce convallis lacus velit, a faucibus dolor vulputate eget. Donec eget sodales est. Integer nec convallis metus, a scelerisque metus. Nullam tortor velit, interdum in justo sit amet, tristique condimentum magna. Sed sed ipsum orci. '}
]


