# Whenever you update anything...
    PLEASE go to common.js and change const LAST_UPDATED = "Month XX, 20XX";

# Updating the Divide and Conquer document
If you want to update the Divide and Conquer document, put it in the main folder and title it "divide-and-conquer.pdf"

# Updating the website with more deliverables
Claude made the latest foundation of the website. Here's how to use it:

Here's your site. A few things to know:

Everything you'll need to update lives in one spot: near the top of the <script> tag there's TEAM, DELIVERABLES, and EXTRA_MATERIALS. Flip an item's status to "complete", add its date and href, and the page re-renders itself — no HTML/CSS to touch.
For videos, just paste the normal YouTube watch link as href; it's auto-converted to an embedded player once status is "complete".
The Divide and Conquer entry is already set to complete, pointing at documents/divide-and-conquer.pdf. Create a documents/ folder next to index.html and drop your PDF in there named divide-and-conquer.pdf (or update the href to match whatever you name it) and the download will work.
Group members, reviewers, and sponsor info are placeholders ("Add member name", etc.) — swap in your real details in the TEAM object.

Design-wise I leaned into a pedal-enclosure/oscilloscope feel (warm charcoal, amber LED accent, teal "complete" indicator, condensed industrial display type) rather than a generic template look, and the SD1/SD2 sections use status dots so it's visually obvious what's done vs. pending at a glance.
