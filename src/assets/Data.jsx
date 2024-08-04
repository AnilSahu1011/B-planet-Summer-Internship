import image1 from "./image 1.png"
import image2 from "./image 2.png"
import image3 from "./image 3.png"
import image4 from "./image 4.png"
import image5 from "./image 5.png"
import image6 from "./image 6.png"
import image7 from "./image 7.png"
import image8 from "./image 8.png"
import image9 from "./image 9.png"
import image10 from "./image 10.png"
import image11 from "./image 11.png";
import image12 from "./image 12.png";
import image13 from "./image 13.png";
import image14 from "./image 14.png";
import image15 from "./image 15.png";
import image16 from "./image 16.png";
import image17 from "./image 17.png";
import image18 from "./image 18.png";
import image19 from "./image 19.png";
import image20 from "./image 20.png";

const Data = [
    {
        id: 1,
        image:image1,
        title: "Tree 1",
        subTitle: "A towering oak tree known for its strong wood and sprawling branches.",
        guide: {
            water: "Water deeply once a week.",
            light: "Full sun.",
            tips: "Ensure good soil drainage to prevent root rot."
        },
        description: "An iconic symbol of strength and longevity, ideal for large gardens."
    },
    {
        id: 2,
        image:image2,
        title: "Tree 2",
        subTitle: "A vibrant maple tree with stunning red foliage in autumn.",
        guide: {
            water: "Keep the soil consistently moist.",
            light: "Full sun to partial shade.",
            tips: "Prune in late winter to maintain shape."
        },
        description: "Provides beautiful fall color and is perfect for landscaping."
    },
    {
        id: 3,
        image:image3,
        title: "Tree 3",
        subTitle: "A cherry blossom tree that blooms with delicate pink flowers in spring.",
        guide: {
            water: "Water moderately; avoid waterlogging.",
            light: "Full sun.",
            tips: "Fertilize in early spring for better blooms."
        },
        description: "Ideal for adding a touch of elegance and seasonal beauty to gardens."
    },
    {
        id: 4,
        image:image4,
        title: "Tree 4",
        subTitle: "A tall pine tree with long needles and cones.",
        guide: {
            water: "Water deeply during dry periods.",
            light: "Full sun.",
            tips: "Requires minimal pruning, but remove dead branches as needed."
        },
        description: "Great for providing privacy screens and windbreaks."
    },
    {
        id: 5,
        image:image5,
        title: "Plant 1",
        subTitle: "A small succulent with thick, fleshy leaves that store water.",
        guide: {
            water: "Water sparingly; allow the soil to dry out between waterings.",
            light: "Bright, indirect light.",
            tips: "Avoid overwatering to prevent root rot."
        },
        description: "Perfect for indoor environments and low-maintenance care."
    },
    {
        id: 6,
        image:image6,
        title: "Plant 2",
        subTitle: "An aromatic herb with thin, green leaves used in cooking.",
        guide: {
            water: "Water regularly, keeping soil consistently moist.",
            light: "Full sun.",
            tips: "Harvest leaves frequently to encourage new growth."
        },
        description: "Adds fresh flavor to dishes and thrives in sunny windowsills."
    },
    {
        id: 7,
        image:image7,
        title: "Plant 3",
        subTitle: "A flowering plant with bright, colorful blooms that attract pollinators.",
        guide: {
            water: "Water deeply once a week.",
            light: "Full sun.",
            tips: "Deadhead spent flowers to promote continuous blooming."
        },
        description: "Ideal for brightening up garden beds and attracting bees."
    },
    {
        id: 8,
        image:image8,
        title: "Plant 4",
        subTitle: "A leafy green plant that thrives in cooler temperatures.",
        guide: {
            water: "Water consistently, keeping the soil evenly moist.",
            light: "Partial shade.",
            tips: "Protect from extreme heat to prevent bolting."
        },
        description: "Perfect for cool-season gardens and adding fresh greens to your diet."
    },
    {
        id: 9,
        image:image9,
        title: "Tray",
        subTitle: "A small, rectangular tray used for seed starting and seedling growth.",
        guide: {
            water: "Keep the soil consistently moist.",
            light: "Place in a sunny location or under grow lights.",
            tips: "Ensure proper drainage to avoid waterlogging."
        },
        description: "Essential for starting seeds and nurturing young plants indoors."
    },
    {
        id: 10,
        image:image10,
        title: "Soil",
        subTitle: "A shallow tray designed for organizing and displaying plants.",
        guide: {
            water: "Water as needed based on plant requirements.",
            light: "Position in a well-lit area.",
            tips: "Use trays with drainage holes for better plant health."
        },
        description: "Great for arranging potted plants and adding a decorative touch."
    },
    {
        id: 11,
        image:image11,
        title: "Soil 2",
        subTitle: "A large, sturdy tray ideal for transporting multiple plants.",
        guide: {
            water: "Check soil moisture levels before moving.",
            light: "Keep in a light or shaded area as needed.",
            tips: "Use a tray with a raised edge to prevent spills."
        },
        description: "Useful for moving plants between locations or for watering multiple plants at once."
    },
    {
        id: 12,
        image:image12,
        title: "Spade",
        subTitle: "A tray with compartments designed for organizing different plant varieties.",
        guide: {
            water: "Water each compartment according to plant needs.",
            light: "Position in a location with appropriate light levels.",
            tips: "Label compartments for easy identification of plants."
        },
        description: "Helps keep various plants organized and simplifies plant care."
    },
    {
        id: 13,
        image:image13,
        title: "Duck 1",
        subTitle: "A decorative garden duck with a colorful, painted finish.",
        guide: {
            water: "Clean regularly to maintain appearance.",
            light: "Place in a sunny or shaded spot based on decoration needs.",
            tips: "Use outdoor-safe paint for longevity."
        },
        description: "Adds a whimsical touch to garden landscapes and water features."
    },
    {
        id: 14,
        image:image14,
        title: "Duck 2",
        subTitle: "A ceramic duck designed to float in garden ponds or water features.",
        guide: {
            water: "Ensure the duck is suitable for pond use.",
            light: "Position in or near water features.",
            tips: "Check for damage after winter to avoid leaks."
        },
        description: "Enhances the aesthetic appeal of water features with a charming design."
    },
    {
        id: 15,
        image:image15,
        title: "Duck 3",
        subTitle: "A small, metal duck sculpture for garden decoration.",
        guide: {
            water: "Keep dry to prevent rust.",
            light: "Suitable for any garden spot.",
            tips: "Apply rust-resistant coating for longer life."
        },
        description: "Provides a touch of elegance and artistry to garden spaces."
    },
    {
        id: 16,
        image:image16,
        title: "Duck 4",
        subTitle: "An inflatable duck for use in pools or water gardens.",
        guide: {
            water: "Inflate before use; deflate and store after.",
            light: "Suitable for poolside or water garden use.",
            tips: "Check for leaks before each use."
        },
        description: "Adds fun and functionality to pools or water features."
    },
    {
        id: 17,
        image:image17,
        title: "Pot 1",
        subTitle: "A small terracotta pot perfect for indoor plants.",
        guide: {
            water: "Water when the topsoil feels dry.",
            light: "Place in bright, indirect light.",
            tips: "Ensure pot has drainage holes to prevent overwatering."
        },
        description: "Ideal for growing herbs or small indoor plants."
    },
    {
        id: 18,
        image:image18,
        title: "Pot 2",
        subTitle: "A large ceramic pot suitable for outdoor plants and shrubs.",
        guide: {
            water: "Water deeply to reach the plant roots.",
            light: "Best in full sun to partial shade.",
            tips: "Use a saucer to catch excess water."
        },
        description: "Provides a decorative container for larger plants and shrubs."
    },
    {
        id: 19,
        image:image19,
        title: "Pot 3",
        subTitle: "An elegant hanging pot for trailing plants.",
        guide: {
            water: "Water regularly to keep the soil moist.",
            light: "Place in a location with indirect light.",
            tips: "Adjust the height to suit the plant's growth habit."
        },
        description: "Perfect for displaying trailing or cascading plants."
    },
    {
        id: 20,
        image:image20,
        title: "Pot 4",
        subTitle: "A modern, self-watering pot with an integrated reservoir.",
        guide: {
            water: "Fill the reservoir as needed; the pot will handle the rest.",
            light: "Suitable for various light conditions.",
            tips: "Check the reservoir level regularly."
        },
        description: "Convenient for busy gardeners, providing consistent moisture."
    },
    {
        id: 21,
        image:image17,
        title: "Pot 1",
        subTitle: "A small terracotta pot perfect for indoor plants.",
        guide: {
            water: "Water when the topsoil feels dry.",
            light: "Place in bright, indirect light.",
            tips: "Ensure pot has drainage holes to prevent overwatering."
        },
        description: "Ideal for growing herbs or small indoor plants."
    },
    {
        id: 22,
        image:image18,
        title: "Pot 2",
        subTitle: "A large ceramic pot suitable for outdoor plants and shrubs.",
        guide: {
            water: "Water deeply to reach the plant roots.",
            light: "Best in full sun to partial shade.",
            tips: "Use a saucer to catch excess water."
        },
        description: "Provides a decorative container for larger plants and shrubs."
    },
    {
        id: 23,
        image:image19,
        title: "Pot 3",
        subTitle: "An elegant hanging pot for trailing plants.",
        guide: {
            water: "Water regularly to keep the soil moist.",
            light: "Place in a location with indirect light.",
            tips: "Adjust the height to suit the plant's growth habit."
        },
        description: "Perfect for displaying trailing or cascading plants."
    },
    {
        id: 24,
        image:image20,
        title: "Pot 4",
        subTitle: "A modern, self-watering pot with an integrated reservoir.",
        guide: {
            water: "Fill the reservoir as needed; the pot will handle the rest.",
            light: "Suitable for various light conditions.",
            tips: "Check the reservoir level regularly."
        },
        description: "Convenient for busy gardeners, providing consistent moisture."
    },
    {
        id: 25,
        image:image12,
        title: "Spade",
        subTitle: "A tray with compartments designed for organizing different plant varieties.",
        guide: {
            water: "Water each compartment according to plant needs.",
            light: "Position in a location with appropriate light levels.",
            tips: "Label compartments for easy identification of plants."
        },
        description: "Helps keep various plants organized and simplifies plant care."
    },
    {
        id: 26,
        image:image10,
        title: "Soil",
        subTitle: "A shallow tray designed for organizing and displaying plants.",
        guide: {
            water: "Water as needed based on plant requirements.",
            light: "Position in a well-lit area.",
            tips: "Use trays with drainage holes for better plant health."
        },
        description: "Great for arranging potted plants and adding a decorative touch."
    },
    {
        id: 27,
        image:image9,
        title: "Tray",
        subTitle: "A small, rectangular tray used for seed starting and seedling growth.",
        guide: {
            water: "Keep the soil consistently moist.",
            light: "Place in a sunny location or under grow lights.",
            tips: "Ensure proper drainage to avoid waterlogging."
        },
        description: "Essential for starting seeds and nurturing young plants indoors."
    },
    {
        id: 28,
        image:image11,
        title: "Soil 2",
        subTitle: "A large, sturdy tray ideal for transporting multiple plants.",
        guide: {
            water: "Check soil moisture levels before moving.",
            light: "Keep in a light or shaded area as needed.",
            tips: "Use a tray with a raised edge to prevent spills."
        },
        description: "Useful for moving plants between locations or for watering multiple plants at once."
    },
    {
        id: 29,
        image:image1,
        title: "Tree 1",
        subTitle: "A towering oak tree known for its strong wood and sprawling branches.",
        guide: {
            water: "Water deeply once a week.",
            light: "Full sun.",
            tips: "Ensure good soil drainage to prevent root rot."
        },
        description: "An iconic symbol of strength and longevity, ideal for large gardens."
    },
    {
        id: 30,
        image:image2,
        title: "Tree 2",
        subTitle: "A vibrant maple tree with stunning red foliage in autumn.",
        guide: {
            water: "Keep the soil consistently moist.",
            light: "Full sun to partial shade.",
            tips: "Prune in late winter to maintain shape."
        },
        description: "Provides beautiful fall color and is perfect for landscaping."
    },
    {
        id: 31,
        image:image3,
        title: "Tree 3",
        subTitle: "A cherry blossom tree that blooms with delicate pink flowers in spring.",
        guide: {
            water: "Water moderately; avoid waterlogging.",
            light: "Full sun.",
            tips: "Fertilize in early spring for better blooms."
        },
        description: "Ideal for adding a touch of elegance and seasonal beauty to gardens."
    },
    {
        id: 32,
        image:image4,
        title: "Tree 4",
        subTitle: "A tall pine tree with long needles and cones.",
        guide: {
            water: "Water deeply during dry periods.",
            light: "Full sun.",
            tips: "Requires minimal pruning, but remove dead branches as needed."
        },
        description: "Great for providing privacy screens and windbreaks."
    },
    {
        id: 33,
        image:image13,
        title: "Duck 1",
        subTitle: "A decorative garden duck with a colorful, painted finish.",
        guide: {
            water: "Clean regularly to maintain appearance.",
            light: "Place in a sunny or shaded spot based on decoration needs.",
            tips: "Use outdoor-safe paint for longevity."
        },
        description: "Adds a whimsical touch to garden landscapes and water features."
    },
    {
        id: 34,
        image:image14,
        title: "Duck 2",
        subTitle: "A ceramic duck designed to float in garden ponds or water features.",
        guide: {
            water: "Ensure the duck is suitable for pond use.",
            light: "Position in or near water features.",
            tips: "Check for damage after winter to avoid leaks."
        },
        description: "Enhances the aesthetic appeal of water features with a charming design."
    },
    {
        id: 35,
        image:image15,
        title: "Duck 3",
        subTitle: "A small, metal duck sculpture for garden decoration.",
        guide: {
            water: "Keep dry to prevent rust.",
            light: "Suitable for any garden spot.",
            tips: "Apply rust-resistant coating for longer life."
        },
        description: "Provides a touch of elegance and artistry to garden spaces."
    },
    {
        id: 36,
        image:image16,
        title: "Duck 4",
        subTitle: "An inflatable duck for use in pools or water gardens.",
        guide: {
            water: "Inflate before use; deflate and store after.",
            light: "Suitable for poolside or water garden use.",
            tips: "Check for leaks before each use."
        },
        description: "Adds fun and functionality to pools or water features."
    },
    {
        id: 37,
        image:image16,
        title: "Duck 4",
        subTitle: "An inflatable duck for use in pools or water gardens.",
        guide: {
            water: "Inflate before use; deflate and store after.",
            light: "Suitable for poolside or water garden use.",
            tips: "Check for leaks before each use."
        },
        description: "Adds fun and functionality to pools or water features."
    },
    
];

export default Data