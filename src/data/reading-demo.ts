export type ReadingStatus = "read" | "reading" | "to-read";

export type ReadingBook = {
  id: string;
  title: string;
  author: string;
  status: ReadingStatus;
  genres: string[];
  buckets: string[];
  pages: number;
  favorite?: boolean;
  hasNotes?: boolean;
  lastStartedAt?: string;
  lastFinishedAt?: string;
  readCount?: number;
  series?: {
    name: string;
    number: number;
    color: string;
  };
  spine: string;
  reviewSlug?: string;
};

export type ReadingBucket = {
  id: string;
  label: string;
  read: number;
  total: number;
};

export const readingBuckets: ReadingBucket[] = [
  { id: "all", label: "All books", read: 30, total: 33 },
  { id: "tiny-bookshop", label: "Tiny Bookshop challenge", read: 0, total: 0 },
  { id: "russian-lit", label: "Russian literature explorations", read: 2, total: 2 },
  { id: "unfiled", label: "Outside the named shelves", read: 28, total: 31 },
];

export const readingBooks: ReadingBook[] = [
  { id: "the-will-of-the-many", title: "The Will of the Many", author: "James Islington", status: "read", genres: ["Fantasy"], buckets: [], pages: 774, series: { name: "The Hierarchy", number: 1, color: "#3d5a53" }, spine: "#3d5a53" },
  { id: "the-strength-of-the-few", title: "The Strength of the Few", author: "James Islington", status: "reading", genres: ["Fantasy"], buckets: [], pages: 725, series: { name: "The Hierarchy", number: 2, color: "#3d5a53" }, spine: "#58627b" },
  { id: "the-odyssey", title: "The Odyssey", author: "Homer, translated by E. V. Rieu and revised by D. C. H. Rieu", status: "reading", genres: ["Classics", "Epic poetry"], buckets: [], pages: 416, spine: "#876b46" },
  { id: "project-hail-mary", title: "Project Hail Mary", author: "Andy Weir", status: "read", genres: ["Science fiction"], buckets: [], pages: 496, spine: "#41606d" },
  { id: "the-song-of-achilles", title: "The Song of Achilles", author: "Madeline Miller", status: "read", genres: ["Literary fiction", "Myth retellings"], buckets: [], pages: 416, favorite: true, spine: "#74504a" },
  { id: "a-suitable-boy", title: "A Suitable Boy", author: "Vikram Seth", status: "read", genres: ["Literary fiction"], buckets: [], pages: 1488, favorite: true, spine: "#6d4835" },
  { id: "war-and-peace", title: "War and Peace", author: "Leo Tolstoy", status: "read", genres: ["Classics", "Historical fiction", "Russian literature"], buckets: ["russian-lit"], pages: 1424, spine: "#4b5366" },
  { id: "master-and-margarita", title: "The Master and Margarita", author: "Mikhail Bulgakov", status: "read", genres: ["Classics", "Magical realism", "Russian literature"], buckets: ["russian-lit"], pages: 384, favorite: true, spine: "#7b3433" },
  { id: "fellowship-of-the-ring", title: "The Fellowship of the Ring", author: "J. R. R. Tolkien", status: "read", genres: ["Classics", "Fantasy"], buckets: [], pages: 432, series: { name: "The Lord of the Rings", number: 1, color: "#4d644d" }, spine: "#4d644d" },
  { id: "the-two-towers", title: "The Two Towers", author: "J. R. R. Tolkien", status: "read", genres: ["Classics", "Fantasy"], buckets: [], pages: 352, series: { name: "The Lord of the Rings", number: 2, color: "#4d644d" }, spine: "#4d644d" },
  { id: "return-of-the-king", title: "The Return of the King", author: "J. R. R. Tolkien", status: "read", genres: ["Classics", "Fantasy"], buckets: [], pages: 416, series: { name: "The Lord of the Rings", number: 3, color: "#4d644d" }, spine: "#4d644d" },
  { id: "dune", title: "Dune", author: "Frank Herbert", status: "to-read", genres: ["Classics", "Science fiction"], buckets: [], pages: 896, spine: "#897b5c" },
  { id: "red-rising", title: "Red Rising", author: "Pierce Brown", status: "read", genres: ["Dystopian", "Science fiction"], buckets: [], pages: 382, favorite: true, series: { name: "Red Rising", number: 1, color: "#8d4036" }, spine: "#8d4036" },
  { id: "golden-son", title: "Golden Son", author: "Pierce Brown", status: "read", genres: ["Dystopian", "Science fiction"], buckets: [], pages: 430, favorite: true, series: { name: "Red Rising", number: 2, color: "#8d4036" }, spine: "#8d4036" },
  { id: "morning-star", title: "Morning Star", author: "Pierce Brown", status: "read", genres: ["Dystopian", "Science fiction"], buckets: [], pages: 524, favorite: true, series: { name: "Red Rising", number: 3, color: "#8d4036" }, spine: "#8d4036" },
  { id: "iron-gold", title: "Iron Gold", author: "Pierce Brown", status: "read", genres: ["Dystopian", "Science fiction"], buckets: [], pages: 624, favorite: true, series: { name: "Red Rising", number: 4, color: "#8d4036" }, spine: "#8d4036" },
  { id: "dark-age", title: "Dark Age", author: "Pierce Brown", status: "read", genres: ["Dystopian", "Science fiction"], buckets: [], pages: 800, favorite: true, series: { name: "Red Rising", number: 5, color: "#8d4036" }, spine: "#8d4036" },
  { id: "light-bringer", title: "Light Bringer", author: "Pierce Brown", status: "read", genres: ["Dystopian", "Science fiction"], buckets: [], pages: 704, favorite: true, series: { name: "Red Rising", number: 6, color: "#8d4036" }, spine: "#8d4036" },
  { id: "dungeon-crawler-carl", title: "Dungeon Crawler Carl", author: "Matt Dinniman", status: "read", genres: ["Fantasy", "LitRPG"], buckets: [], pages: 446, series: { name: "Dungeon Crawler Carl", number: 1, color: "#7c5d38" }, spine: "#7c5d38" },
  { id: "carls-doomsday-scenario", title: "Carl's Doomsday Scenario", author: "Matt Dinniman", status: "read", genres: ["Fantasy", "LitRPG"], buckets: [], pages: 362, series: { name: "Dungeon Crawler Carl", number: 2, color: "#7c5d38" }, spine: "#7c5d38" },
  { id: "dungeon-anarchists-cookbook", title: "The Dungeon Anarchist's Cookbook", author: "Matt Dinniman", status: "read", genres: ["Fantasy", "LitRPG"], buckets: [], pages: 532, series: { name: "Dungeon Crawler Carl", number: 3, color: "#7c5d38" }, spine: "#7c5d38" },
  { id: "gate-of-the-feral-gods", title: "The Gate of the Feral Gods", author: "Matt Dinniman", status: "read", genres: ["Fantasy", "LitRPG"], buckets: [], pages: 550, series: { name: "Dungeon Crawler Carl", number: 4, color: "#7c5d38" }, spine: "#7c5d38" },
  { id: "the-butchers-masquerade", title: "The Butcher's Masquerade", author: "Matt Dinniman", status: "read", genres: ["Fantasy", "LitRPG"], buckets: [], pages: 704, series: { name: "Dungeon Crawler Carl", number: 5, color: "#7c5d38" }, spine: "#7c5d38" },
  { id: "eye-of-the-bedlam-bride", title: "The Eye of the Bedlam Bride", author: "Matt Dinniman", status: "read", genres: ["Fantasy", "LitRPG"], buckets: [], pages: 690, series: { name: "Dungeon Crawler Carl", number: 6, color: "#7c5d38" }, spine: "#7c5d38" },
  { id: "this-inevitable-ruin", title: "This Inevitable Ruin", author: "Matt Dinniman", status: "read", genres: ["Fantasy", "LitRPG"], buckets: [], pages: 724, series: { name: "Dungeon Crawler Carl", number: 7, color: "#7c5d38" }, spine: "#7c5d38" },
  { id: "a-parade-of-horribles", title: "A Parade of Horribles", author: "Matt Dinniman", status: "read", genres: ["Fantasy", "LitRPG"], buckets: [], pages: 704, series: { name: "Dungeon Crawler Carl", number: 8, color: "#7c5d38" }, spine: "#7c5d38" },
  { id: "hpmor", title: "Harry Potter and the Methods of Rationality", author: "Eliezer Yudkowsky", status: "read", genres: ["Fan fiction", "Fantasy"], buckets: [], pages: 2001, favorite: true, spine: "#5c536e" },
  { id: "flatland", title: "Flatland", author: "Edwin A. Abbott", status: "read", genres: ["Classics", "Satire", "Science fiction"], buckets: [], pages: 176, favorite: true, spine: "#55645c" },
  { id: "three-body-problem", title: "The Three-Body Problem", author: "Cixin Liu, translated by Ken Liu", status: "read", genres: ["Hard science fiction", "Science fiction", "Translated fiction"], buckets: [], pages: 400, favorite: true, series: { name: "Remembrance of Earth's Past", number: 1, color: "#41536d" }, spine: "#41536d" },
  { id: "the-dark-forest", title: "The Dark Forest", author: "Cixin Liu, translated by Joel Martinsen", status: "read", genres: ["Hard science fiction", "Science fiction", "Translated fiction"], buckets: [], pages: 528, favorite: true, series: { name: "Remembrance of Earth's Past", number: 2, color: "#41536d" }, spine: "#41536d" },
  { id: "deaths-end", title: "Death's End", author: "Cixin Liu, translated by Ken Liu", status: "read", genres: ["Hard science fiction", "Science fiction", "Translated fiction"], buckets: [], pages: 624, favorite: true, series: { name: "Remembrance of Earth's Past", number: 3, color: "#41536d" }, spine: "#41536d" },
  { id: "the-goldfinch", title: "The Goldfinch", author: "Donna Tartt", status: "read", genres: ["Coming-of-age", "Literary fiction"], buckets: [], pages: 784, favorite: true, spine: "#7a5d3d" },
  { id: "nausea", title: "Nausea", author: "Jean-Paul Sartre", status: "read", genres: ["Classics", "Existentialism", "Philosophy"], buckets: [], pages: 240, favorite: true, spine: "#4e4f62" },
];

export const demoReviews: Array<{ slug: string; title: string; author: string; note: string }> = [];
