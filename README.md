# Infriendly

> In a world dominated by smarts, perhaps stupid is better…

## Unstable

Infriendly is still in an unstable state. It's usable, but it's not ready for
production environments.

(To be fair, your mileage may vary even when we get to v1.0.)

## Preface

Infriendly is an online web platform for writing textual documents that
intentionally does not have any "smart" features. It's not "Unfriendly", it's
"Infriendly", because I like being wrong.

Unlike other writing platforms that offer auto-correct, grammar suggestions, or
formatting assistance, Infriendly aims to provide a simple and straightforward
environment for users to focus solely on their writing.

And there’s no generative AI features. You have to do the writing yourself, or
at least flip to a different tab to visit your favourite AI language model.
*It doesn’t even have auto-correct, what do you expect?*

Infriendly's minimalist approach appeals to those who prefer a clean and
distraction-free interface.

And when I say minimalist and distraction-free, I *mean it* — there’s nothing
but you, a browser window and your keyboard. There’s standard CUA keyboard
shortcuts, so you get easy access to your usual shortcuts, you know,
`Control-Z`, `Control-X`, `Control-C`, `Control-V`, which are provided by the
browser.

Infriendly's simplicity and lack of automated features may not appeal to
everyone. In fact, it's not designed to appeal to everyone. Many users prefer
the convenience and assistance provided by more traditional code editors or
Markdown processors.

However, for those who value a pure and unadulterated writing
experience, Infriendly offers a refreshing alternative.

## Usage

You can access Infriendly at `https://that1m8head.github.io/infriendly`.

Once you open it up, you’ll be greeted with a white screen (or `#222222` screen,
if you’re using dark mode) and a blinking text prompt.

Infriendly defaults to just straight plain text for formatting, and doesn’t let
you use anything else, because that would be a distraction, and I'm also too
lazy to build markup functionality into it.

You can use Infriendly to edit code, but don't expect it to be very good.
Don't expect Gedit, expect Notepad.

## Offline Usage

Infriendly does not currently support offline usage. It is an online web
platform that requires an internet connection to access and use. However, you
can bookmark the URL `https://that1m8head.github.io/infriendly` to quickly
access Infriendly whenever you have an internet connection.

If you’re experienced in making web apps work offline, I’d appreciate the help.

## License

Infriendly is licensed to everyone under the Apache License 2.0.

## Versions

Infriendly uses SemVer-1 (Semantic Versioning Minus 1), meaning the PATCH number
is excluded.

* v0.0: Initial non-versioned release, including only the layout and styling.
* v0.1: Initial beta version. Includes the layout, styling and basic text
editing but no saving or opening files.
* v0.2: Basic file opening and saving, where saving a file will download it
with a random hex string in the file name.

## Enhancement Ideas

Sorted in order of most feasible to least feasible:

* Storing file name and metadata
* Handling non-textual files
* Allowing use even offline
* In-app pop-up dialogs
* Custom themes
* Layout customisation
* Title bar and command bar customisation
* Client-side configuration
* Exporting to more common formats
* Markup language processing (for languages like Markdown and AsciiDoc)
* Vim and Emacs style editing
