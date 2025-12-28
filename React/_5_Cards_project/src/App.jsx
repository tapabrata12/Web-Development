import Card from './components/Card';
const App = () => {

const jobs = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    company: "Amazon",
    title: "Senior UI/UX Designer",
    type: "Part time",
    level: "Senior Level",
    rate: "120$/hr",
    location: "Kolkata, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    title: "Frontend Designer",
    type: "Full time",
    level: "Mid Level",
    rate: "150$/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    title: "Product Designer",
    type: "Remote",
    level: "Senior Level",
    rate: "140$/hr",
    location: "Remote"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAel73XxRrOwTx8yGLTOvVpoqkLUELbaRSLg&s",
    company: "Meta",
    title: "UI Designer",
    type: "Contract",
    level: "Junior Level",
    rate: "60$/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    title: "UX Researcher",
    type: "Full time",
    level: "Senior Level",
    rate: "160$/hr",
    location: "Remote"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    title: "Design Lead",
    type: "Full time",
    level: "Senior Level",
    rate: "180$/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTsEbEc9W4KLOFJi16maxjlDgTLIVi2Qc5Q&s",
    company: "Adobe",
    title: "UI Engineer",
    type: "Part time",
    level: "Mid Level",
    rate: "110$/hr",
    location: "Noida, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    company: "Spotify",
    title: "Product Designer",
    type: "Remote",
    level: "Mid Level",
    rate: "130$/hr",
    location: "Remote"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWzGxiYGlEM-IzG4PWRrn875F0LOcXLulhQ&s",
    company: "Flipkart",
    title: "UX Designer",
    type: "Full time",
    level: "Mid Level",
    rate: "90$/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    company: "Swiggy",
    title: "UI/UX Designer",
    type: "Full time",
    level: "Junior Level",
    rate: "70$/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    company: "Zomato",
    title: "Product Designer",
    type: "Contract",
    level: "Mid Level",
    rate: "85$/hr",
    location: "Gurgaon, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunVg9Mbb82qZq29s8uL5K3v3NjlW-D3oafw&s",
    company: "TCS",
    title: "UX Consultant",
    type: "Full time",
    level: "Senior Level",
    rate: "75$/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    company: "Infosys",
    title: "UI Designer",
    type: "Full time",
    level: "Junior Level",
    rate: "55$/hr",
    location: "Pune, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    company: "Wipro",
    title: "UX Analyst",
    type: "Full time",
    level: "Mid Level",
    rate: "65$/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    company: "Accenture",
    title: "Experience Designer",
    type: "Contract",
    level: "Senior Level",
    rate: "95$/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://toppng.com/uploads/preview/paytm-logo-vector-11573850407xnvt10xxcf.png",
    company: "Paytm",
    title: "Product Designer",
    type: "Full time",
    level: "Mid Level",
    rate: "80$/hr",
    location: "Noida, India"
  },
  {
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png",
    company: "PhonePe",
    title: "UX Designer",
    type: "Full time",
    level: "Senior Level",
    rate: "100$/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/razorpay-icon.png",
    company: "Razorpay",
    title: "Design Lead",
    type: "Full time",
    level: "Senior Level",
    rate: "125$/hr",
    location: "Remote"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Freshworks-vector-logo.svg",
    company: "Freshworks",
    title: "UI Designer",
    type: "Remote",
    level: "Mid Level",
    rate: "90$/hr",
    location: "Remote"
  },
  {
    logo: "https://toppng.com/uploads/preview/zoho-logo-11609384261mms96eqsuc.png",
    company: "Zoho",
    title: "Product UX Designer",
    type: "Full time",
    level: "Junior Level",
    rate: "60$/hr",
    location: "Chennai, India"
  }
];


  return (
    <div className="parent">
        {
          jobs.map(function(params, key) {

           return <div key={key}>
            <Card  logo={params.logo} company={params.company} title={params.title} type={params.type} level={params.level} rate={params.rate} location={params.location}/>
           </div>

          })
        }
    </div>
  )
}

export default App;