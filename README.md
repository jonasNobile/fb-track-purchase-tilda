# Zasilkovna widget for Tilda
## Documentation
1. Put `<script src="https://widget.packeta.com/www/js/library.js"></script>` to the head tag.
2. Put `<script src="..." apikey="yourApiKey"></script>` to the head tag **(has to be below Packeta library).**
3. Add hidden filed in **ST100** block for pick-up place information with variable name `packeta-point-id`.
4. Add delivery variants input in **ST100** block and add `Zásilkovna 65 Kč = 65`.

The script will automaticaly add event listener to Zásilkovna button in the checkout. Script will shows a packeta widget pop-up, when user selects Zásilkovna option.