
const products = [
  {
    id: '01',
    name: 'Samsung RS50N3513SA/EU American Fridge Freezer - Graphite 845/4706',
    available_quantity: 5,
    price: 849.99,
    image_url: '../images/8377900_R_Z001A.jpeg',
    description: 'The All-Around Cooling system ensures that items on every shelf and compartment remain evenly chilled. Strategically placed vents circulate cool air everywhere inside the fridge and the freezer to maintain an even and constant temperature that helps food stay fresh longer. Give your home a modern and minimalist look with this fridges clean and contemporary appearance.It features an elegant stainless steel finish and beautiful flat doors.',
    category_code: 35,
    category_name: 'Kitchen electricals'
  },
  {
    id: '02',
    name: 'Apple MacBook Pro Touch 2019 16in i9 16GB 1TB - Space Grey 195/4375',
    available_quantity: 7,
    price: 50,
    image_url: '../images/1954375_R_Z001A.jpeg',
    description: 'Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we"ve ever made.With an immersive 16 - inch Retina display, super - fast processors, next - generation graphics, the largest battery capacity ever in a MacBook Pro, a new Magic Keyboard and massive storage, it"s the ultimate pro notebook for the ultimate user.',
    category_code: 15,
    category_name: 'Laptops and PCs'
  },
  {
    id: '03',
    name: 'Panasonic 65 Inch TX-65GX700B Smart 4K HDR LED TV 916/9265',
    available_quantity: 12,
    price: 500.00,
    image_url: '../images/9169265_R_Z001A.jpeg',
    description: '2019"s GX700 LED Smart TV features an HDR Bright Panel to present colourful 4 K HDR pictures.Thanks to HDR10 + Dynamic Metadata technology & Adaptive Backlight Dimming this slimline TV delivers detailed pictures with accurate contrast.Smart tech lets you access Freeview Play catch - up TV & the latest box - sets from the most popular video streaming services. 4 K HDR. Model number: TX - 65 GX700B.',
    category_code: 25,
    category_name: 'Televisions and accessories'
  },
  {
    id: '04',
    name: 'Spear & Jackson 41cm Hand Push Petrol Lawnmower - 125cc 759/7004',
    available_quantity: 0,
    price: 220.00,
    image_url: '../images/7597004_R_Z001A.jpeg',
    description: 'This Spear & Jackson push petrol lawnmower has an easy prime and pull-start and a reliable Briggs and Stratton 125cc 450e 4-stroke petrol engine. It provides enough power to cut through thick and damp grass. Petrol lawnmowers are perfect for larger gardens because there are no cables, meaning you can cut anywhere. The large 50 litre collection bag combined with a soft - grip, ergonomic handle means you can mow for longer without discomfort or having to regularly empty the collection bag.The ergonomic handle is padded with soft foam making it more comfortable to hold, so you can use it for longer.',
    category_code: 1,
    category_name: 'Other'
  },
  {
    id: '05',
    name: 'Hampstead 2 Seater Fabric Sofa Bed - Ocean Blue651/2200',
    available_quantity: 10,
    price: 1100.00,
    image_url: '../images/6512200_R_Z001A.jpeg',
    description: 'About this product - The Hampstead sofa bed is brilliant for having friends and family to stay.And it doesn"t compromise on style or substance. It has a classic look with beautifully piped edges and lovely high back seats to lean into after a long day. The frame is made with durable hardwood and the chunky feet are easy to simply screw on when it arrives. Screw - on legs only. Part of the Hampstead collection. Metal action mechanism.  Small double bed. Material:',    
    category_code: 0,
    category_name: 'Unknown'
  },
  {
    id: '06',
    name: 'Revere 9ct Yellow Gold Solid Curb Bracelet223/1248',
    available_quantity: 5,
    price: 2499.00,
    image_url: '../images/2231248_R_Z001A.jpeg',
    description: 'This stylish 9ct Gold Solid Curb Bracelet is certain to stand out in style. 9 ct yellow gold. Length of bracelet 23 cm / 9 in. Solid chain. Approximate weight 2 oz.',
    category_code: 28,
    category_name: 'Men"s jewellery and cufflinks'
  },
];

const users = [
    {
      'id': 1,
      'name': 'user',
      'password': 'qwerty'
    },
    {
      'id': 2,
      'name': 'example',
      'password': 'qwerty'
    },
    {
      'id': 3,
      'name': 'joe.bloggs',
      'password': 'password'
    }
];

const customer = [{
  "customer": {
    "id": "",
    "buildingName": "",
    "flatNumber": "",
    "houseNumber": 0,
    "line2": "",
    "line4": "",
    "town": "",
    "county": "",
    "postCode": "",
    "email": "",
    "phone": "",
    "dateOfBirth": "",
    "dependents":  0,
    "employmentStatus": "",
    "accountNumber": "",
    "sortCode": "",
    "grossAnnualIncome": "",
    "firstName": "",
    "lastName": "",
    "maritalStatus": "",
    "middleName": "",
    "residentialStatus": "",
    "title": ""
  }
}];

module.exports =  { 'products': products, users: users, 'customer': customer };