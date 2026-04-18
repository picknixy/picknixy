const fs = require('fs');
const path = 'src/data/mockData.ts';

const imageMap = {
  "vitamotion-review-2026": "https://i.im.ge/e4Ba68/VitaMotion_Review_2026.webp",
  "save-the-marriage-system-review": "https://i.im.ge/e4B7Vh/Save_The_Marriage_System_Review_Unhappy_couple_on_couch_dealing_with_marriage_problems_stress_and_communication_issues_.png",
  "water-smart-box-review-diy-atmospheric-water-generator": "https://i.im.ge/e4BIrM/Water_Smart_Box_Review.webp",
  "prostadine-review-2026": "https://i.im.ge/e4BL0Y/Prostadine_Review_showing_prostate_support_supplement_bottle_with_natural_ingredients_and_60-day_money-back_guarantee.webp",
  "red-boost-review-2026": "https://i.im.ge/e4BUgD/Red_Boost_Review_image_showing_an_older_couple_relaxing_in_bed_alongside_the_Red_Boost_blood_flow_support_supplement_highlighting_intimacy_vitality_and_natural_performance_support.webp",
  "past-life-reading": "https://i.im.ge/e4Bhe4/Digital_product_box_for_Your_Past_Life_Reading_featuring_a_man_standing_before_a_celestial_clock_portal.webp",
  "pure-reiki-mastery": "https://i.im.ge/e4B0DC/Complete_Pure_Reiki_Mastery_home_certification_course_featuring_Owen_Coleman_s_3-step_healing_system_instructional_manuals_and_Reiki_Master_certificate.webp"
};

let code = fs.readFileSync(path, 'utf8');

for (const [id, imageUrl] of Object.entries(imageMap)) {
  let indexStart = code.indexOf(`id: "${id}",`);
  if (indexStart === -1) {
    indexStart = code.indexOf(`"id": "${id}",`); // try with quotes
  }
  
  if (indexStart !== -1) {
    let nextIdIndex = code.indexOf('\n    id: "', indexStart + 10);
    if (nextIdIndex === -1) nextIdIndex = code.indexOf('\n  "id": "', indexStart + 10);
    if (nextIdIndex === -1) nextIdIndex = code.indexOf('\n  },', indexStart); 
    if (nextIdIndex === -1) nextIdIndex = code.length;
    
    let slice = code.substring(indexStart, nextIdIndex);
    
    // Replace logic
    slice = slice.replace(/image:\s*fallbackSvg/g, `image: "${imageUrl}"`);
    slice = slice.replace(/"image":\s*"[^"]+"/g, `"image": "${imageUrl}"`);
    slice = slice.replace(/image:\s*"[^"]+"/g, `image: "${imageUrl}"`);
    
    code = code.substring(0, indexStart) + slice + code.substring(nextIdIndex);
  } else {
    console.log(`Could not find id: ${id}`);
  }
}

fs.writeFileSync(path, code);
console.log('Update finished.');
