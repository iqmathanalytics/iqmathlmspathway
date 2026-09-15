/** Tamil Nadu college catalog for registration / profile pickers. */

export interface CatalogCollege {
  name: string;
  city: string;
}

/** Marker prefix for catalog rows not yet inserted into Supabase. */
export const CATALOG_COLLEGE_PREFIX = "catalog:";

export function catalogCollegeId(name: string): string {
  return `${CATALOG_COLLEGE_PREFIX}${encodeURIComponent(name)}`;
}

export function isCatalogCollegeId(id: string): boolean {
  return id.startsWith(CATALOG_COLLEGE_PREFIX);
}

export function nameFromCatalogCollegeId(id: string): string {
  if (!isCatalogCollegeId(id)) return "";
  try {
    return decodeURIComponent(id.slice(CATALOG_COLLEGE_PREFIX.length));
  } catch {
    return id.slice(CATALOG_COLLEGE_PREFIX.length);
  }
}

/**
 * Parsed from the product college list.
 * City is taken from a trailing " – City" / " - City" when present.
 */
export const TAMIL_NADU_COLLEGES: CatalogCollege[] = [
  { name: "Anna University", city: "Chennai" },
  { name: "Madras Institute of Technology", city: "Chennai" },
  { name: "Loyola College", city: "Chennai" },
  { name: "Madras Christian College", city: "Tambaram" },
  { name: "Stella Maris College", city: "Chennai" },
  { name: "Presidency College", city: "Chennai" },
  { name: "SRM Institute of Science and Technology", city: "Chennai" },
  { name: "Sathyabama Institute of Science and Technology", city: "Chennai" },
  { name: "Hindustan Institute of Technology and Science", city: "Chennai" },
  { name: "VIT Chennai", city: "Chennai" },
  { name: "Saveetha Engineering College", city: "Chennai" },
  { name: "Rajalakshmi Engineering College", city: "Chennai" },
  { name: "SSN College of Engineering", city: "Chennai" },
  { name: "Sri Sairam Engineering College", city: "Chennai" },
  { name: "Panimalar Engineering College", city: "Chennai" },
  { name: "PSG College of Technology", city: "Coimbatore" },
  { name: "Coimbatore Institute of Technology", city: "Coimbatore" },
  { name: "Kumaraguru College of Technology", city: "Coimbatore" },
  { name: "Sri Krishna College of Engineering and Technology", city: "Coimbatore" },
  { name: "Sri Ramakrishna Engineering College", city: "Coimbatore" },
  { name: "Karpagam College of Engineering", city: "Coimbatore" },
  { name: "Hindusthan College of Engineering and Technology", city: "Coimbatore" },
  { name: "SNS College of Technology", city: "Coimbatore" },
  { name: "Amrita Vishwa Vidyapeetham", city: "Coimbatore" },
  { name: "Government College of Technology", city: "Coimbatore" },
  { name: "Thiagarajar College of Engineering", city: "Madurai" },
  { name: "Madurai Kamaraj University", city: "Madurai" },
  { name: "Velammal College of Engineering and Technology", city: "Madurai" },
  { name: "Sethu Institute of Technology", city: "Madurai" },
  { name: "Fatima College", city: "Madurai" },
  { name: "The American College", city: "Madurai" },
  { name: "Thiagarajar School of Management", city: "Madurai" },
  { name: "National Institute of Technology, Tiruchirappalli", city: "Tiruchirappalli" },
  { name: "SASTRA Deemed University", city: "Thanjavur" },
  { name: "SRM Institute of Science and Technology – Tiruchirappalli", city: "Tiruchirappalli" },
  { name: "K. Ramakrishnan College of Engineering", city: "Tiruchirappalli" },
  { name: "M.A.M. College of Engineering", city: "Tiruchirappalli" },
  { name: "Holy Cross College", city: "Tiruchirappalli" },
  { name: "Bishop Heber College", city: "Tiruchirappalli" },
  { name: "Government College of Engineering, Salem", city: "Salem" },
  { name: "Sona College of Technology", city: "Salem" },
  { name: "Knowledge Institute of Technology", city: "Salem" },
  { name: "Vinayaka Mission's Kirupananda Variyar Engineering College", city: "Salem" },
  { name: "Mahendra Engineering College", city: "Namakkal" },
  { name: "AVS Engineering College", city: "Salem" },
  { name: "Kongu Engineering College", city: "Erode" },
  { name: "Bannari Amman Institute of Technology", city: "Erode" },
  { name: "Nandha Engineering College", city: "Erode" },
  { name: "Velalar College of Engineering and Technology", city: "Erode" },
  { name: "Government College of Engineering, Erode", city: "Erode" },
  { name: "Government College of Engineering, Tirunelveli", city: "Tirunelveli" },
  { name: "Francis Xavier Engineering College", city: "Tirunelveli" },
  { name: "PSN College of Engineering and Technology", city: "Tirunelveli" },
  { name: "National Engineering College", city: "Kovilpatti" },
  { name: "University College of Engineering, Nagercoil", city: "Nagercoil" },
  { name: "St. Xavier's College", city: "Palayamkottai" },
  { name: "Government College of Engineering, Thanjavur", city: "Thanjavur" },
  { name: "PRIST University", city: "Thanjavur" },
  { name: "K. Ramakrishna College of Technology", city: "Tiruchirappalli" },
  { name: "A.V.V.M. Sri Pushpam College", city: "Thanjavur" },
];

export function findCatalogCollege(name: string): CatalogCollege | undefined {
  const key = name.trim().toLowerCase();
  return TAMIL_NADU_COLLEGES.find((c) => c.name.toLowerCase() === key);
}
