document.addEventListener("DOMContentLoaded", async () => {
        const select = document.getElementById("theme-list")

        // Get all installed addons
        const addons = await browser.management.getAll()
        const themes = addons.filter((addon) => addon.type === "theme")

        // Populate dropdown
        themes.forEach((theme) => {
                const option = document.createElement("option")
                option.value = theme.id
                option.textContent = theme.name
                if (theme.enabled) option.selected = true
                select.appendChild(option)
        })

        // On change, enable selected theme
        select.addEventListener("change", async () => {
                const selectedId = select.value
                await browser.management.setEnabled(selectedId, true)
        })
})
