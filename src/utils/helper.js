function is_nav_item_active(nav_href)
{
	const url = window.location.href;
	return url == `http://localhost:3000${nav_href}`;
}

function go_to(nav_href)
{
	window.location.href = `http://localhost:3000${nav_href}`;
}

export { is_nav_item_active, go_to };
