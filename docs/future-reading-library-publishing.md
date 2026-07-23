# Future Reading Library Publishing Plan

## Goal

Make it easy to add and update books without editing site code, while keeping the public site a static GitHub Pages website.

## Recommended approach

Use a private Google Sheet as the source of truth. Each row represents one book and carries the existing shelf metadata:

- title and author
- reading status
- genres and collection buckets
- page count
- series name and volume number
- latest start and finish dates, when known
- number of completed reads (default: one)
- favourite and notes flags
- optional review slug

A GitHub Action will validate the sheet data, generate the site library data, build the Astro site, and publish it to GitHub Pages.

## Update workflow

1. Add or amend a row in Google Sheets.
2. Use the repository's **Update reading library** action, or allow its scheduled run to collect the change.
3. The action validates the values and updates the published bookshelf.

No local development environment or pull request should be necessary for ordinary reading updates.

## Implementation notes

- Keep the sheet private; the action should access it with a read-only credential stored as a GitHub secret.
- Put controlled fields such as status, genres, and bucket into dropdowns in the sheet to prevent misspellings.
- Validate required fields, positive page counts, valid dates, and complete series data before publishing.
- Keep the generated site data in the repository so each published bookshelf has a reviewable history and can be restored.
- Continue to write full reviews as Markdown files in the repository; the optional review slug in the sheet links a book to its review.

## When to build it

Implement this after the reading data model and shelf design are stable. The existing `src/data/reading-demo.ts` file is the migration source for the first sheet.
