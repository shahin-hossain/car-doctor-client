/**
 * React Router - React Vite Project
 * tailwind CSS
 * Daisy UI
 * 
 * set Basic Routing with react router dom
 * component make করার আগে দেখতে হবে। 
 * project কেমন component লাগতে পারে সে অনুযায়ী folder structure করতে হবে।
 * project start করার আগে কি কি করা লাগবে কিভাবে করলে ভালো হবে সে বিষয়ে আগে  একটু চিন্তা করে নিতে হবে।
 * 
 * create pages > Home > Home > Home.jsx
 * create pages > shared > Footer & Navbar > .jsx 
 * 
 * সমস্ত website e max-width দিতে হলে 
 * main.jsx > 
 * <div className='max-w-5xl mx-auto'>
*        <React.StrictMode>
             <RouterProvider router={router} />
        </React.StrictMode>,
 * </div>
 *  
 * create pages > Home > Banner 
 * daisy ui banner setup
 * about section added with about component in home page
 * Service area component fetch fake data from local json
 * login page, signup page, & Toggle 
 * firebase auth config, auth provider, auth context 
 * and crate user with sign up
 * onAuthStateChange
 * user sign in / logout 
 * 
 * SERVER
 * 
 * setup express server with mongodb cors dotenv
 * 
 * MongoDB
 * connect server with Mongo DB
 * Manual Multiple data Mongo DB সে সেট করা হয়েছে। প্রথমে ক্লাইন্ট সাইট থেকে services data গুলো
 * কপি করে নিয়ে সেটা নতুন  একটা database create করে INSERT DOCUMENT করে, {}  এর মধ্যে data গুলো পেষ্ট করে দিতে হবে।
 * সেখান থেকে data access করে toArray() করে app.get() করে data send করেতে হবে।
 * 
 * change URL from client site service.jsx component
 * book service link add id wise for service card
 * create checkout page & crate form, id wise data load
 * data fetch to server with handleBookService
 * crate new collection in carDoctor database
 * req accept form server using app.post
 * set data to database and server res.send()
 * login logout, username conditional nav
 * checkout page
 * crate checkout form
 * fetch data from server service id wise
 *  add default input field in checkout form
 * get email using useContext(AuthContext)
 * create a object with necessary data like, email, title, serviceId, service, img etc.
 * and post booking data database 
 * 
 * server side 
 * set query options for some specific data with query object give property value 1 or 0
 * get data with query 
 * find data query wise form data base and res.send
 * 
 * create booking page 
 * conditional nav name My bookings with Link Route.
 * fetch data with query email
 * 
 * create Private Route
 *   - set loading, condition & navigate
 * create bookingRow Page
 *   - create table on booking page
 *   - table row set in bookingRow page
 *   - props showing on the page
 */