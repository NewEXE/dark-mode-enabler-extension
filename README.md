# Dark Mode Enabler Extension
[Инструкции на русском](/README-RU.md)
> Browser extension that turns the page into dark mode when you click the extension's icon or by Ctrl+Shift+D.
> Chrome, Opera and any modern Chromium-based browser are supported.
> Very simple and lightweight extension, without any adware, spyware or user data collection.

## Installation

1. Download `dark-mode-enabler.crx` file from [Releases page](https://github.com/NewEXE/dark-mode-enabler-extension/releases)
2. Go to на Extensions page in your browser: copy and paste `chrome://extensions` to address bar of the browser then press `Enter`
3. Enable "Developer mode"
4. Drug-and-drop `dark-mode-enabler.crx` file to extensions page
5. Confirm installation of custom extension
6. (Optional) Allow access to search pages (such as Google) and Incognito (private) mode if you planned to use extension there

## How it works

Extension simple adds/removes CSS property `filter: invert(90%)` to page's `<html>` tag. [Read about this property](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#invert).
