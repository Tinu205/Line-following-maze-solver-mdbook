// Clicking a draft chapter's title acts like clicking its ❱ arrow.
document.addEventListener('click', function (e) {
    if (e.target.closest('a')) return;   // real links and the arrow work on their own

    const li = e.target.closest('#sidebar li.chapter-item');
    if (!li) return;

    const toggle = [...li.querySelectorAll('a.toggle, .chapter-fold-toggle')]
        .find(t => t.closest('li') === li);

    if (toggle) toggle.click();          // let mdBook handle the expand/collapse
    else li.classList.toggle('expanded');
});