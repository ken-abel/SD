/* Shared rendering helpers used by semester-1.html, semester-2.html,
   and materials.html. You shouldn't need to edit this file — edit the
   data arrays inside each page instead. */

/* Update this one line whenever you make changes to the site — it
   shows up in the footer of every page. Format is up to you, e.g.
   "September 22, 2026" or "9/22/2026". */
const LAST_UPDATED = "September 22, 2026";

function youtubeEmbed(url){
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

function btnLabel(kind){
  if(kind === "video") return "Watch video";
  if(kind === "slides") return "Download slides";
  return "Download document";
}

function renderDeliverable(item){
  const li = document.createElement("li");
  li.className = "deliv" + (item.status === "complete" ? " is-complete" : "");
  const embed = (item.status === "complete" && item.kind === "video" && item.href)
    ? youtubeEmbed(item.href) : null;

  let actionHTML = "";
  if(item.status === "complete" && item.href){
    if(embed){
      actionHTML = `<iframe src="${embed}" title="${item.title}" allowfullscreen></iframe>`;
    } else {
      actionHTML = `<div class="deliv-action"><a class="btn" href="${item.href}" target="_blank" rel="noopener">${btnLabel(item.kind)}</a></div>`;
    }
  }

  li.innerHTML = `
    <span class="dot"></span>
    <div class="deliv-body">
      <div class="deliv-title">${item.title}</div>
      <div class="deliv-meta">${item.date}</div>
      ${actionHTML}
    </div>`;
  return li;
}

function renderList(containerId, items){
  const el = document.getElementById(containerId);
  items.forEach(item => el.appendChild(renderDeliverable(item)));
}

function renderExtras(containerId, items){
  const el = document.getElementById(containerId);
  if(items.length === 0){
    el.innerHTML = `<div class="extras-empty">No additional materials posted yet.</div>`;
    return;
  }
  const ul = document.createElement("ul");
  ul.className = "deliv-list";
  items.forEach(item => ul.appendChild(renderDeliverable({ kind:"doc", ...item })));
  el.appendChild(ul);
}

function setFooterDate(){
  const el = document.getElementById("last-updated");
  if(el) el.textContent = LAST_UPDATED;
}
