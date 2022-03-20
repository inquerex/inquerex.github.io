![Inquerex](https://www.inquerex.com/images/inquerex100px.png "Inquerex")

# User Guide

Prototype 1.0

I. Getting Oriented

1. <a href="#synopsis">Synopsis</a>
2. <a href="#why-inquerex">Why Inquerex?</a>
3. <a href="#search-pdfs">Search PDFs</a>
4. <a href="#paradigmatic-uses">Paradigmatic Uses</a>
5. <a href="#installation">Installation</a>

II. Performing a Search

6. <a href="#selecting-pdfs-to-search">Selecting PDFs to Search</a>
7. <a href="#entering-a-search-query">Entering a Search Query</a>
8. <a href="#choosing-output-options">Choosing Output Options</a>
9. <a href="#viewing-search-results">Viewing Search Results</a>

III. Beyond Searches

10. <a href="#your-inquerex-folder">Your Inquerex Folder</a>
11. <a href="#settings">Settings</a>
12. <a href="#writing-your-own-programs">Writing Your Own Programs</a>
13. <a href="#making-your-own-links">Making Your Own Links</a>
14. <a href="#technical-footnotes">Technical Footnotes</a>
15. <a href="#end-user-license-agreement">End-User License Agreement</a>
16. <a href="#other-licenses">Other Licenses</a>

## Synopsis

### The Basics

The interface for Inquerex's Search PDFs tool is dialogical: a series of pop-up windows that ask you for input. Basically, you'll go through three windows:
1. [Select PDFs to search](#selecting-pdfs-to-search).
2. [Enter a search query](#entering-a-search-query).
3. [Choose output options](#choosing-output-options). 

When the search is complete, you'll see a message on the screen letting you know; and, in that message, you can click "View Results" to open the search results in your default PDF viewer. At the top of the PDF, you'll see a list of the files you searched. Click them to navigate the results. And click page names/numbers in the margins to open particular pdfs to particular pages.

### Tips & Tricks

1. Hold down the `shift` key while you click on items in a list to **select multiple items**;
2. Right click on selected PDFs, then click "Search with Inquerex" under the "Services" menu to **quick select those PDFs**.
3. **Copy links to open PDFs to particular pages** by right clicking on selected PDFs, going to the Services menu, and clicking "Copy Inquerex Link(s)" (then paste the links anywhere);
4. If those links open web pages, instead of PDFs, then **make Inquerex your default web browser** in "System Preferences," under "General."
5. **Enter all your input in a program file** and put it in [the Active Programs folder](#your-inquerex-folder) to [load it the next time you start a new search](#writing-your-own-programs);
6. Set **context conditions** in your search queries using [the simple syntax described below](#how-to-craft-a-search-query).

## Why Inquerex?

#### Inquerex exists to create digital tools for critical inquiry.

Critical inquiry happens when we ask questions about the standards to which we hold one another accountable. We ask those questions, in part, because we care about shared goods at stake. In a world where some digital tools make critical inquiry harder, Inquerex is all about digital tools that make it easier.

## Search PDFs

Inquerex is a set of tools. Search PDFs is one of those tools.

## Paradigmatic Uses

#### The Search PDFs tool is for researchers, teachers, journalists, and others who want to find words in PDFs quickly, easily, and reliably.

>You're a **researcher** doing qualitative interviews. You have them transcribed in PDFs on your computer. You want to analyze key words and phrases, quickly, in context. But it's hard to keep a reliable index by hand, even when you use your PDF viewer's "search" tool. Plus, you find yourself focusing, all too easily, on some patterns of words and phrases over others. So you use Inquerex to create color-coded statistics for you, along with links to open particular pages. Now you can code interviews more systematically and strategically.

>You're a **teacher** writing a lesson plan on a handful of authors. You've got a bunch of texts written by them, saved as PDFs in multiple folders on your computer. You want to know how those authors interpreted one another because it would clarify, for your students, what makes them similar/different. But you know these authors's references to one another might be buried in obscure places in the texts. So you use Inquerex to find the references quickly. Granted, your PDF editor can search for words in a single PDF. And it can search for words in all of the PDFs in a single folder. But you want to search in multiple PDFs located in multiple folders on your computer. Inquerex makes this easy.

>You're a **journalist** digging through some long, legal documents. They're full of legal jargon. You're looking for word *A* when it's on the same page as word *B* but not if words *C*, *D*, or *E* appear on the page, too. You can't skim each page with word *A* because that would take days, and you're on deadline. So you fire up Inquerex, and you isolate the correct pages using a search query that contains simple context conditions.

#### Use Inquerex for the rote stuff, so that you can focus on the more complex parts of critical inquiry.
The Search PDFs tool is designed to make it possible to answer questions about texts that you couldn't answer otherwise because the rote stuff would be too much.

## Installation

#### Install Inquerex by dragging and dropping it into your Applications folder.

The prototype of Inquerex is, for now, **only compatible with macOS**. Installing Inquerex is easy:
1. Download Inquerex on <a href="https://www.inquerex.com/">this page</a>.
2. Open the downloaded `.dmg` file.
3. In the window that appears, drag and drop Inquerex on top of the Applications folder. 

As you use Inquerex, your computer will ask if you want to give Inquerex various permissions. **To use all of Inquerex's features, say 'yes' every time.**

## Selecting PDFs to Search

#### You can select PDFs anywhere on your computer using multiple methods.

To begin a search, click "Start" on the welcome window. The next window will prompt you to "choose method(s) for selecting pdfs to search." You can select PDFs in multiple ways. Click on the method(s) you want to use in the list. If you hold down the `shift` key while you click on items in the list, then you can select multiple methods at once: i.e., you can use multiple means to select the PDFs you want to search. Each method will add the selected PDFs to the current search set.

* **Last Search Set**: this will select all of the PDFs used in your most recent search, if a past search exists.
* **Clipboard**: this will select PDFs by reading text on your computer's [clipboard](https://support.apple.com/en-us/HT209651) if that text is a list of file paths to PDFs; e.g., if you're a [Zotero](www.zotero.org) user, you can copy attachment file paths to the clipboard using the [Zutilo](https://www.zotero.org/support/plugins) plugin.
* **Saved Set(s)**<a id="savedsets"></a>: this will prompt you to select a `.txt` file containing a list of file paths; note that you can find every set of PDFs you've ever searched in the Past PDF Sets folder.
* **Selected File(s)**: this will prompt you to select PDF files on your computer; click "Cancel" when you're done selecting files.
* **Selected Folder(s)**: this will prompt you to select folders on your computer (and it'll select all of the PDFs in those folders); click "Cancel" when you're done selecting folders.
* **Active PDF**: this will prompt you to click on an open PDF file in your PDF viewer; but this selection method is a little finnicky: e.g., the PDF viewer needs to be the last thing you clicked before you launched Inquerex.
* **Selected Program(s)**: this will prompt you to select an existing program file or files; when selected as an input method, Inquerex will abandon any other PDF selection methods you might've clicked, and it'll simply run the program(s).
* **New Program**: this will prompt you to write a program file, using a template as the starting place; you can abandon it, use it, or save it to use it later.

## Entering a Search Query

#### You can write complex search queries using a simple syntax.

### How to Craft a Search Query

A "search query" is a line of text that your computer uses to find things for you. You probably write search queries all the time when you browse the internet. Maybe you go to a search engine website (e.g., Google, DuckDuckGo, etc.) and type some text inside a box there. Or maybe you type some text in the long, horizontal box at the top of your web browser. In both cases, your computer uses the words you type, with the help of a search engine, to find webpages containing some or all of those words.

**Inquerex's Search PDFs tool is like a search engine for finding particular pages in pdfs on your computer.** You'll start by selecting the pdf files you want to search. Then you'll enter a search query. Unlike search queries on the internet, however, Inquerex's search queries will find only those pdf pages containing an **exact match**. You'll use the building blocks below to craft a query that'll find pages containing exact matches, where an "exact match" is any word or phrase that satisfies every condition in your query.

### Building Blocks

| Expression | Interpretation |
| :------------ | :------------ |
| **words** | "words" *must* appear on the page |
| **[words]** x | "words" *must* appear on the page, before x |
| x **[words]** | "words" *must* appear on the page, after x |
| **~[words]** x | "words" *must not* appear on the page, before x |
| x **~[words]** | "words" *must not* appear on the page, after x |
| [words]**{n}** x | with n words between "words" and x <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {n<sup>1</sup>-n<sup>z</sup>} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; n<sup>1</sup>, n<sup>2</sup>, n<sup>3</sup> . . . or n<sup>z</sup> words <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {n+/n-} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; n or more/less words <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {>n/\<n} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; greater/less than n words <br> &nbsp; |
| **(characters)** | "characters" may appear, too |
| **\*** | one or more letters and/or digits |
| **a/b**  | a *or* b |
| **/string/** | "string" is a perl-compatible regular expression |
| **\\** | interpret the next character literally <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  \\[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\\* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\"  <br> &nbsp; |

### Rules

#### *a. Queries may have three parts.*

| 1 | 2 | 3 |
| :------------: | :------------: | :------------: |
| **[words]** | **words** | **[words]** |
| <sub>context before</sub> | <sub>core</sub> | <sub>context after</sub> |

#### *b. Context parts may be multiplied.*

| 1a | 1b | 2 | 3 |
| :------------: | :------------: | :------------: | :------------: |
| **[words]** | **[words]** | **words** | **[words]** |
| <sub>context before<sub>1</sub></sub> | <sub>context before<sub>2</sub></sub> | <sub>core</sub> | <sub>context after</sub> |

#### *c. Context parts may be divided.*

| 1 | 2 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| :------------: | :------------: | :------------: |
| **[ [ words ] words [ words ] ]** | **words** | - |
| /------------<sub>context before</sub>------------/ | <sub>core</sub> | - |
| <sub>/---context---/---core---/--context---/</sub> | - | - |

### Example Set<sub>a</sub>
*Observe the <span style="background-color: #B8860B"><span style="color: #FFFFFF">matches</span></span> generated by each query (if any).*

#### tyrant
<span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrant**</span></span>, tyrants, tyranny, (tyrannies), tyrannize, tyrannical, tyrannicide

#### tyran
tyrant, tyrants, tyranny, (tyrannies), tyrannize, tyrannical, tyrannicide

####  tyran*
<span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrant**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrants**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyranny**</span></span>, (<span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannies**</span></span>), <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannize**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannical**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannicide**</span></span>

####  tyrann*
tyrant, tyrants, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyranny**</span></span>, (<span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannies**</span></span>), <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannize**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannical**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannicide**</span></span>

#### tyrant*
tyrant, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrants**</span></span>, tyranny, (tyrannies), tyrannize, tyrannical, tyrannicide

#### tyrant(\*)
<span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrant**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrants**</span></span>, tyranny, (tyrannies), tyrannize, tyrannical, tyrannicide

#### tyrant(s)
<span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrant**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrants**</span></span>, tyranny, (tyrannies), tyrannize, tyrannical, tyrannicide

#### tyranny/tyrannize/tyrannical
tyrant, tyrants, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyranny**</span></span>, (tyrannies), <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannize**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannical**</span></span>, tyrannicide

#### tyrann(y)(ize)(ical)
tyrant, tyrants, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyranny**</span></span>, (tyrannies), <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannize**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannical**</span></span>, tyrannicide

#### tyrann(y)(i)(ze)(c)(al)(ide)
tyrant, tyrants, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyranny**</span></span>, (tyrannies), <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannize**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannical**</span></span>, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannicide**</span></span>

#### tyrannies
tyrant, tyrants, tyranny, (<span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannies**</span></span>), tyrannize, tyrannical, tyrannicide

#### \\(tyrannies\\)
tyrant, tyrants, tyranny, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**(tyrannies)**</span></span>, tyrannize, tyrannical, tyrannicide

#### /tyrann\w{4}/
tyrant, tyrants, tyranny, (tyrannies), tyrannize, <span style="background-color: #B8860B"><span style="color: #FFFFFF">**tyrannical**</span></span>, tyrannicide

#### /tyrann*/
tyrant, tyrants, tyranny, (tyrannies), tyrannize, tyrannical, tyrannicide

### Example Set<sub>b</sub>
*Observe the <span style="background-color: #B8860B"><span style="color: #FFFFFF">matches</span></span> generated by each query (if any).*

####  Sethe
You your best thing, <span style="background-color: #B8860B"><span style="color: #FFFFFF">Sethe</span></span>. You are.

####  [best] Sethe
You your best thing, <span style="background-color: #B8860B"><span style="color: #FFFFFF">Sethe</span></span>. You are.

####  [You your]{2} Sethe
You your best thing, <span style="background-color: #B8860B"><span style="color: #FFFFFF">Sethe</span></span>. You are.

####  best [are]{1-3}
You your <span style="background-color: #B8860B"><span style="color: #FFFFFF">best</span></span> thing, Sethe. You are.

#### best [are]{1-2}
You your best thing, Sethe. You are.

#### [You]{2+} thing [You]
You your best <span style="background-color: #B8860B"><span style="color: #FFFFFF">thing</span></span>, Sethe. You are.

#### [You]{3+} thing [You]
You your best thing, Sethe. You are.

#### best thing ~[Ella]
You your <span style="background-color: #B8860B"><span style="color: #FFFFFF">best thing</span></span>, Sethe. You are.

#### [things] are
You your best thing, Sethe. You are.

#### ~[things] are
You your best thing, Sethe. You <span style="background-color: #B8860B"><span style="color: #FFFFFF">are</span></span>.

#### [thing(s)] are
You your best thing, Sethe. You <span style="background-color: #B8860B"><span style="color: #FFFFFF">are</span></span>.

#### ~[thing(s)] are
You your best thing, Sethe. You are.

####  [ [your] thing [You] ] Sethe
You your best thing, <span style="background-color: #B8860B"><span style="color: #FFFFFF">Sethe</span></span>. You are.

####  [ [your] thing [ [best] You ] Sethe
You your best thing, <span style="background-color: #B8860B"><span style="color: #FFFFFF">Sethe</span></span>. You are.

####  [ [your] thing [ ~[best] You ] Sethe
You your best thing, Sethe. You are.

#### (Y/y)ou(\*)
<span style="background-color: #B8860B"><span style="color: #FFFFFF">You</span></span> <span style="background-color: #B8860B"><span style="color: #FFFFFF">your</span></span> best thing, Sethe. <span style="background-color: #B8860B"><span style="color: #FFFFFF">You</span></span> are.

#### (Y/y)ou\*
You <span style="background-color: #B8860B"><span style="color: #FFFFFF">your</span></span> best thing, Sethe. You are.

#### (Y/y)ou
<span style="background-color: #B8860B"><span style="color: #FFFFFF">You</span></span> your best thing, Sethe. <span style="background-color: #B8860B"><span style="color: #FFFFFF">You</span></span> are.

#### you(\*)
You <span style="background-color: #B8860B"><span style="color: #FFFFFF">your</span></span> best thing, Sethe. You are.

#### you\*
You <span style="background-color: #B8860B"><span style="color: #FFFFFF">your</span></span> best thing, Sethe. You are.

#### you
You your best thing, Sethe. You are.

####  [you(\*)]{\<4} ~[worst/worse] You ~[/\d+/]
You your best thing, Sethe. <span style="background-color: #B8860B"><span style="color: #FFFFFF">You</span></span> are.

### Using a Saved Query

If you've written a complex search query, and you want to make it easy to use that query again, then you might want to know a few things:

* **Past Queries**: Inquerex saves all of your past queries in `.txt` files, automatically, in your Past Queries folder.
* **Saved Queries**: Inquerex will save all of your queries, by name, in your Saved Queries folder, if you tell Inquerex to [prompt you to name your queries](#prompt-user-to-name-query).
* On the "enter a search query" window, there's a button called **"Use Saved Query."** If you click that button, Inquerex will ask you to select a `.txt` file that contains a query; and it'll assume that the best place to start looking is in your Saved Queries folder.

So you've got some options:

* You could copy `.txt` files from your Past Queries folder into your Saved Queries folder, manually, and give them memorable names. Then you could open them, yourself, before launching Inquerex; or you could click "Use Saved Query" and load them easily within the Inquerex user interface.
* You could tell Inquerex that you want to name all of your queries (see [`prompt_user_to_name_query`](#prompt-user-to-name-query) below), in which case Inquerex will save all of your queries, by name, in the Saved Queries folder, automatically.
* You could save your queries, yourself, anywhere on your computer, and then copy and paste them into the "enter a search query" window whenever you want.

## Choosing Output Options

The final input window will be “choose output option(s) from the list below.” Remember: you can select multiple output options by clicking on multiple items in the list while holding down the `shift` key.

* **Basic Search**: Display matches in the selected files.
* **Search Specific Pages**<a id="search-specific-pages"></a>: Display matches only if they appear on specific pages in the selected files. If you're searching in multiple files, you'll find the line with the path to the file(s) you want, and you'll type page range(s) after them. After page ranges you can type a description, too. You'll need to draw a line between the file path, page range(s), and description using the `|` character (under the delete key). For example: `path/to/file.pdf | x-y | Chapter 5`. Note that in all page ranges, the first and last page labels must be **unique** within that PDF.
* **Show Search Summary Only**: Display only the statistical report of the search results.
* **Match Upper and Lower Case**: Ignore the difference between upper and lower case letters in the selected files.
* **Display +/- Lines of Context**: Set the number of context lines to display around each match line in the search results.
* **Search Only for Matches per Page**:  Instead of displaying match lines for each page with a match, display the number of matches on the page.
* **Use Metric(s)**: Use colors in the statistical report for items that meet your metrics. This makes it easier to see which items deserve your focus and attention. You can use any/all of the following item metrics:
	1. *n* or more matches
	2. *n* or more pages with matches
	3. *n* or more pages with matches per 100 pages
	4. *n* or more clustered matches
	5. *n* or more clusters

>A "cluster" is a page with *n* or more matches on it. So a "clustered match" is any match that appears on a page with *n* or more matches on it. In addition, you can use two "meta-metrics," which will tell you which items meet *n* of the metrics above.

* **Use Filter(s)**: Display only those pages/items that meet some/all of your metric(s). Filters go the extra step of omitting altogether (from the search results) the pages/items that fall short of your metrics. This makes it even easier to focus on the pages/items with high enough scores according to your metrics. Each metric can be used as the basis for a filter. And filters come in two types: the first filter excludes items from the item list in the main header; the second filter omits an item's matches (if any) from the body of the results.
* **[Output Panel]**: Set all of your output options, all at once, in one window (with the exception of setting specific page ranges).

## Viewing Search Results

While Inquerex is performing your search, you should see a white dot underneath the app icon in the dock. There is no real-time progress indicator. When the search is complete, a pop-up window will appear to let you know. In that window, you can click "View Results" to open the search results in your default PDF viewer. 

When you launch Inquerex for the first time, after you accept the [End-User License Agreement](#end-user-license-agreement) and click "Start," Inquerex will ask you where you want to save your search results files. The default location is the Desktop. Wherever you choose to save your search results, that's where you'll find them when the search is complete. You can change the file naming conventions for search results in the settings.txt file (see [Settings](#settings) below). And note that, of course, your search results can be annotated. And you can search your search results (e.g., for particular words or phrases that appear in context lines).

## Your Inquerex Folder

All of the other files that you might need to access as you use Inquerex will be located in your Inquerex folder, which is located in your user's Home folder. If you need help finding your Home folder, here's a simple trick: click on the Desktop and then press the `h` key while pressing the `command` and `shift` keys. That should open your Home folder. Inside it, look for a folder named "Inquerex." You can create a shortcut to your Inquerex folder by right clicking it and selecting "Make Alias." Then you can move that shortcut wherever you want (and rename it, too).


Inside your Inquerex folder you'll find the Settings file (see [Settings](#settings) below), along with a series of folders:

1. **Active Programs**: When you start a new search, if there's one or more `.txt` files in this folder, Inquerex will load the file(s) as "program files," and it'll ask if you want to run a search (or searches) based on the input variable values contained in the `.txt` files (see [Writing Your Own Programs](#writing-your-own-programs) below).
2. **Defaults**: Inquerex saves some default values in this folder. Note that you can change the default value for every setting in the `default_settings.txt` file. When you edit the settings file through the app, Inquerex will allow you to "Restore Defaults," if you wish. If you click "Restore Defaults," Inquerex will overwrite the existing `settings.txt` file with the values in the `default_settings.txt` file. So if you want to set your own default values for all of the settings, you can do it by editing the `default_settings.txt` file. On the other hand, if you want Inquerex to restore all of the original default values, simply delete the `default_settings.txt` file. Inquerex will remake it, easily, using the original default values. In addition, if you make Inquerex the default web browser, the path to your *actual* default web browser will be saved in a `.txt` file in this folder, too. To change your default web browser, you'd simply edit that `.txt` file (e.g., drag and drop the app icon of the default web browser from the Applications folder into the `.txt` file). Or, similarly, just delete it; and Inquerex will prompt you to choose a web browser the next time you open an `http://` link or an `.html`, `.htm`, or `.xml` file.
3. **Locations**: Inquerex saves important locations in this folder (i.e., locations on your computer). The location where you want to save search results will be saved in a `.txt` file in this folder. If you want to change the location where Inquerex saves your search results, simply edit this `.txt` file. Or just delete it, and Inquerex will ask you where to save search results the next time you launch the app.
4. **Logs**<a id="logs"></a>: Every time Inquerex does something on your computer, it logs the app's activity in a `.log` file that it saves in this folder. You'll find the following log files there:
	* **Errors**: Anytime there's something amiss (usually something to do with user input), Inquerex will write a report in this log, and it'll open it for you, automatically.
	* **EULA**: This is a copy of the [End-User License Agreement](#end-user-license-agreement) that you accepted when you first launched Inqurex. It's timestamped in what's called Unix Time.
	* **Filters**: If you're using filters in your search, you might find it helpful to see which items didn't make the cut, and why. Inquerex writes a report about that to this log file every time you use filters.
	* **Input**: This contains a report of the user input for the current (or most recent) search. Note that Inquerex will (silently) reconcile any incompatible input. So if you want to check the final values for all of your input, take a look at this log.
	* **Lines**: This log is for developers who want to see, one step at a time, line by line, everything that Inquerex does whenever the app is running.
	* **OCR**: Inquerex checks each of the selected PDF files for optical character recognition (OCR) before searching in them. This log is where Inquerex attempts to print some of the text in each PDF in order to check for OCR.
	* **Runs**: This log records the number of times you've launched Inquerex.
	* **URI**: This log, like the "lines" log, is for developers who want to see, one step at a time, line by line, everything that Inquerex does whenever it tries to open a link (URI).
5. **Past PDF Sets**: Every time you finish creating a set of PDFs to search, Inquerex saves it in a timestamped `.txt` file in this folder.
6. **Past Queries**: Every time you enter a search query, Inquerex saves it in a timestamped `.txt` file in this folder.
7. **Saved PDF Sets**: If you choose ["Saved Set(s)"](#saved-sets) as a method for selecting PDFs to search, Inquerex will look for `.txt` files in this folder, by default. You can copy and paste (or move) `.txt` files from the Past PDF Sets folder to this folder, if you want, and you can give them a name. Or you can enter "y" as the value for `prompt_user_to_name_pdf_set` in the settings file (see [Settings](#settings) below), and Inquerex will ask you to name every PDF set you search, and then it'll save them, by name, in this folder.
8. **Saved Queries**: If you choose ["Use Saved Query"](#using-a-saved-query) when you set your search query, Inquerex will look for `.txt` files here, by default. You can copy and paste (or move) `.txt` files from the Past Queries folder to this folder, if you want, and you can give them a name. Or you can select `prompt_user_to_name_pdf_set` in the settings file (see [Settings](#settings) below), and Inquerex will ask you to name every search query you submit; and it'll save it, by name, in this folder.
9. **Search History**: In this folder, you'll find `.html` files containing the search results for every search you've completed. They're saved for future reference, in case you lose a PDF version of one of your search results, and you can't recreate the search results (e.g., you no longer have the PDFs, you can't find them, you can't remember the search query, etc.). It's a folder containing backups of all of your search results.

## Settings

You can change almost all of the settings in Inquerex. To do so, edit the `settings.txt` file in [your Inquerex folder](#your-inquerex-folder). When you edit the settings file, it's important that you edit only those bits of text enclosed in double quotation marks (e.g., `"n"`, `"y"`, `"3"`, `"#000000"`). Note that "y" stands for "yes," and "n" stands for "no."

The `settings.txt` file contains six groups of settings. Let's walk through each group, one at a time, starting at the top.

### General Preferences

* `prompt_user_to_name_query`:<a id="prompt-user-to-name-query"></a> Set this to "y" if you want Inquerex to ask you to name your search query in a pop-up window.
* `prompt_user_to_name_pdf_set`: Set this to "y" if you want Inquerex to ask you to name the set of selected PDFs in a pop-up window.
* `suggest_most_recent_query`: Set this to "y" if you want Inquerex to provide the most recent search query in the text-box where you enter your query. This is useful if you're using the same search query in multiple searches, back to back.
* `stop_search_if_a_file_is_missing_ocr`: Set this to "y" if you want Inquerex to stop a search (before it starts) if it finds a file that doesn't have readable text. If you set this to "n" then Inquerex will search all of the selected PDF files that it can; and, at the top of the search results, it'll flag the files without readable text.
* `stop_search_if_a_file_is_corrupt`: Set this to "y" if you want Inquerex to stop a search (before it starts) if it finds a file that your computer can't open because of loss of data integrity (i.e., data or file "corruption"). If you set this to "n" then Inquerex will search all of the selected PDF files that it can; and, at the top of the search results, it'll flag the file with data corruption.
* `save_search_results`: Set this to "y" if you want Inquerex to produce a PDF file containing the search results. This is an option because it's possible that you might want Inquerex to produce only the HTML version of your search results (see [`copy results to clipboard as html`](#copy-results-to-clipboard-as-html) below).
* `prepend_app_name_to_filename_of_saved_results`: Set this to "y" if you want Inquerex to prepend the name "inquerex," enclosed in arrows, at the beginning of the file names for your search results files.
* `append_timestamp_to_filename_of_saved_results`: Set this to "y" if you want Inquerex to append the time at which it started to collect input data for the search.
* `overwrite_old_saved_results_with_the_same_filename`: Set this to "y" if you want Inquerex to replace (i.e., "overwrite") any PDF file with the same file name as the current search results file name located in the folder where it saves search results. If you set "append timestamp to filename of saved results" to "n," then it's possible to perform a search using the same query as a previous search; and, if you do, do you want Inquerex to overwrite the search results file from the previous search? The answer might be "yes" if you're experimenting with different output options for a particular search query in a particular set of files. The answer might be "no," though, if you're worried about overwriting the results from a previous search on accident.
* `copy_results_to_clipboard_as_html`<a id="copy-results-to-clipboard-as-html"></a>: Set this to "y" if you want Inquerex to copy an HTML version of the search results to the clipboard whenever a search is complete. HTML is the basic computer language for web pages. Many applications will let you insert HTML into notes and documents.
* `display_simple_matches_in_color`: Set this to "y" if you want Inquerex to display match words/phrases in a distinct color. Note that, in this prototype, Inquerex isn't able to display match words/phrases in a distinct color if the search query contains context conditions. Note, too, that displaying match words/phrases in color will cause the search to take longer to complete (depending on how many pages contain matches).
* `autocorrect_invalid_settings`: Set this to "y" if you want Inquerex to check the settings file for invalid settings every time you launch the app. An "invalid setting" is any variable name or value that isn't intelligible to Inquerex. Note that if this is set to "y," it'll take a little bit longer for Inquerex to launch.
* `limit_capacity_of_search_history_folder`: Set this to "y" if you want Inquerex to delete a handful of the oldest files from the Search History folder every time  it detects that the Search History folder is greater than or equal to one gigabyte in size.
* `automatically_check_for_newer_versions_of_the_app`: Set this to "y" if you want Inquerex to check for newer versions of the app every time it completes a search (if an internet connection is available).
* `default_number_of_context_lines`: Set this to any whole number to tell Inquerex how many lines of context you want to be displayed around match lines in all of your search results, by default.
* `give_option_to_copy_inquerex_link_to_first_page`: Set this to "y" if you want Inquerex to create an action in the "Services" menu that will make links to selected PDFs without prompting you to enter a particular page number (see [Making Your Own Links](#making-your-own-links) below).

### Default Values for Metrics

**This group of settings lists the default values that Inquerex will suggest for *n* when you enter values for *n* in the pop-up window interface.** 

If you find that the pop-up window interace for setting metrics is too burdensome, and you want to speed up the process a little bit, then you can set the default values that Inquerex will suggest to you in the pop-up windows for setting metrics.

Note that setting a default value for a metric is different than turning that metric on in your searches. You'll still have to turn a metric on, in the output options, every time you do a search, no matter what its "default value" might be. In other words, setting a default value for a metric that's greater than 0 isn't the same thing as telling Inquerex to use that metric in all of its searches, by default. It isn't possible to tell Inquerex to do that in this prototype version.

If that's what you want to do, then you should skip Inquerex's pop-up window interface altogether by using program files (see [Writing Your Own Programs](#writing-your-own-programs) below). Once you learn how to write a program file, you'll be able to turn metrics on and off, and set values for them, with ease. And if you want some/all metrics to be "on" in all of your searches, you can edit the template program file accordingly, and then simply copy and paste that template file every time you create a new program.

### HTML Color Codes for the Final Output

**This group of settings lists the hexadecimal color codes for everything in the search results that has (or would have) a particular color.** You can explore these color codes online (e.g., at [this webpage](https://html-color.codes/)). 

A hexadecimal color code tells the computer how much red, green, and blue to use in a given color. The six characters that follow the # symbol contain three pairs, and they correspond with the values for red, green, and blue. If you want to change any/all of the colors that Inquerex uses in the search results, you can do so in this group of settings. 

The "default color" refers to the default color of all text. The "anchor" color refers to the color of the anchor text for navigation links internal to the search results file. That's why, by default, they're the same color as the background color, to hide them. All of the other color variable names should be easy enough to interpret, esp. with some experimentation.

### HTML Entity Codes for the Final Output

**This group of settings lists the HTML entity codes for the handful of the symbols that appear in the search results file.**

An HTML entity code is a special combination of characters used to represent symbols in the webpage programming language known as HTML. To see a list of available HTML entities (and corresponding codes), visit [this webpage](https://www.w3schools.com/charsets/ref_html_entities_4.asp). That webpage will list three different codes for each symbol; you can use any of them. **But omit the semicolon at the end.** The semicolon will cause Inquerex to misinterpret the settings file.

### Valid Character to Divide File Names

**This is a special setting for you if you use a conventional naming scheme for your PDF files: a scheme that begins with the names of authors, followed by the date of publication, and then ends with the title (and subtitle) of the publication.** 

One context in which a conventional naming scheme is common is in database/bibliography apps such as [Zotero](www.zotero.org). There's a useful plug-in for Zotero called [Zotfile](https://www.zotero.org/support/plugins), which, among other things, can tell Zotero to apply a custom naming scheme to all of the PDF attachments added to your Zotero library. If you use the "author, date, title" naming scheme for some of your PDF file names, and if you divide between those three parts of the file name using a particular character (e.g., `|` or `_` or `,` or `-`), then you can tell Inquerex about it; and Inquerex will extract that metadata from the file name and use it to format the headings for that file in the search results. A "valid character" is any character that you can type on a standard keyboard by pressing and releasing a single key (or by pressing and releasing a single key while holding down the `shift` key).

### Valid Character to Divide Author Names

**This, too, is a special setting for you if you use a conventional naming scheme for your PDF files: a scheme that begins with the names of authors, followed by the date of publication, and then ends with the title (and subtitle) of the publication** (see [the previous setting description](#valid-character-to-divide-file-names)). 

If you use a conventional naming scheme in which your PDF file names begin with the names of the author(s), and if you use a particular character to demarcate the names of multiple authors, then you can tell Inquerex about it. Inquerex will look for that particular character in the first part of the file name, and it will separate the names of the authors in the search results.

## Writing Your Own Programs

Once you've run a few searches, you might find that you want to create a search "program file." A search program file is a `.txt` file containing a constellation of variables. It contains all of the variables that the user would otherwise set, bit by bit, through the pop-up window interface. A program file contains all of that input, and Inquerex can load it all at once. If you use a program file, you skip the pop-up window interface altogether.

You can create a new program by selecting "New Program" on the "choose method(s) for selecting PDFs to search" window. When you do that, for the first time, Inquerex will create a file in your Inquerex folder called `template_program.txt`. In the future, you can simply copy that file (right click and select "Copy"), edit it, save it, and (if you like) put it in the Saved Programs folder.

When you open a program file, your computer will probably open it in an app called Text Editor. It's a simple app for editing text. It's perfect for this purpose. But the window might be too small for you to see all the variables in clear columns and rows. Try clicking on one of the window corners and dragging it to a different location on the screen to make the window big enough so that the variables line up in a way that's easy to read (and edit). If you want, you can actually change the default window size for Text Edit: click the words "Text Edit" in the top left corner of your screen, and select "Preferences," then find "Window Size" and change the values for width and height. Resizing the window so that you can see all of the variables and switches in clear columns and rows will make it much easier to write your program file.

A program file is divided into six sections. Each is separated from the others by the `#` character and some blank lines. The second section contains variables and switches for metrics and filters. Metrics appear in the column on the far left. The two filters appear in the next two columns, to the right. And, finally, the *n* values for each metric appear in the right-most column.

Each metric has a switch corresponding with the first filter and another corresponding with the second filter. If you turn on a particular metric's `filter1` switch (by typing `on` after the `=` that appears after the variable name beginning with `filter1` followed by that particular metric's number), then all PDFs in your search that fall below that metric's threshold will be omitted, entirely, from the search results. The second filter (`filter2`) will omit the match lists for those PDFs from the search results if the PDFs fail to meet the metric's threshold. The values for each metric's threshold can be set in the right-most column.

The other variables, and how to edit/assign values, should be easy enough to interpret by name.

Once you've entered your variable values in the program file, then you can save the program file and move it into the Active Programs folder in [your Inquerex folder](#your-inquerex-folder). Whenever you start a new search, if Inquerex finds one or more `.txt` files in the Active Programs folder, it'll ask if you want to perform a series of searches using the variable values from each program file, one program file at a time. Imagine that you have a series of searches you want to perform on a large number of pdf files. You could write a program file for each search, put all the program files into the Active Programs directory, launch the app, click "start," click "yes," and then let Inquerex run searches based on all of the program files one at a time, automatically, overnight.

A few tips and tricks for writing program files:

1. You can **leave the query name and pdf set name variables blank** if you want.
2. **Don't worry too much about making your input variables consistent** with one another. Inquerex will reconcile inconsistent variable values automatically. Check [the "input" log](#logs) to see which variables (if any) Inquerex changed.
3. You can **drag and drop PDF files from a Finder window** onto the Text Editor window, under `program_pdf_paths` and Text Edit will generate the file paths to those files for you, automatically. With a little practice, this is one of the easiest ways to select PDFs to search.

## Making Your Own Links

One of the simplest, but most useful, features of Inquerex's Search PDFs tool is its ability to open particular PDFs to particular pages using hyperlinks. This feature might be useful to you even if you never perform a single search in a single PDF. For example, if you're using an app on your computer to take notes on PDFs that you're reading, and you want to create a link from your notes to a particular page in a particular PDF (so you can retrace your steps later), then you can create that link, quickly and easily, and paste it into your notes. 

To create a link, right click on one or more selected PDFs, hover over the "Services" menu that appears, and then select "Copy Inquerex Link(s)." For each link, Inquerex will ask you which page you want the link to open. Once you're done, the link(s) will be copied to [your computer's clipboard](https://support.apple.com/en-us/HT209651). 

Your clipboard is a place where your comptuer can "copy" some data for you, temporarily, so that you can then "paste" it somewhere else. Anywhere on your computer where you can type text, you should be able to right click and select "Paste" to enter the data on the clipboard there. For example, you could paste a link into Scrivener, Simplenote, Evernote, Endnote, Zotero, Todoist, and so on.

If you want the ability to copy Inquerex links to the clipboard without having to enter a particular page number, such that the links open PDFs to the first page, you can edit the value for `give_option_to_copy_inquerex_link_to_first_page"` from "n" to "y" in [the settings file](#settings). The next time you launch Inquerex, it'll create an additional action under the "Services" menu called "Copy Inquerex Link(s) (First Page)." Use that action when you want to make links to open PDFs to the first page.

## Technical Footnotes

* **Quotation Marks in Program Files**: There's no need to put a `"` (double quotation mark) at the beginning and end of your variable values. You can do it, if you want. But Inquerex will do it for you, automatically, whenever it loads a program file. Conversely, Inquerex will [escape](https://en.wikipedia.org/wiki/Escape_character) any `"` that appears within a variable value, unless the `"` is the very first or the very last character (in which case Inquerex will interept the `"` as a special character marking the beginning/end of the variable value rather than as a character *within* the variable value itself). If you want to use a variable value that contains a `"` at the beginning/end, then you'll need to enclose the entire variable value (including `"` at the beginning/end) inside a pair of `"` characters (e.g., `pdf_set_name=""Keyword X" in So-and-So's Writings"`).
* **Allowed Characters**<a id="allowed-characters"></a>: Inquerex is only able to interpret the "printable characters" on a US-ASCII table. Basically, Inquerex is able to interpret any character that you can type on a standard English keyboard by pressing and releasing a single key, with or without holding down the shift key. A full version of Inquerex's Search PDFs tool would support searching in languages other than English (and more sophisticated support for mathematical and scientific notations). Note, too, that the use of some characters (or character combinations) in some contexts will cause your search results to come out looking wrong or, at worst, Inquerex will become confused about how to complete the current search, so it'll quit and generate an error message (see [Exiting with a Non-Zero Status](#exiting-with-a-non-zero-status) below). So follow these rules about characters:
	1. In file names of selected PDFs, never use `\` or `|`. And never use `[` or an empty `[ ]` pair of square brackets followed immediately by a curly bracket `{` or `}`. And never use English letters with accents or non-English letters.
	2. When [setting a page range to search](#search-specific-pages), the page labels must contain only numbers and English letters without accents.
	3. Always type a space after `%` unless you want Inquerex to interpret the percent sign as the beginning of a percent-encoded character.
* **Zotero Integration**: If you're a [Zotero](www.zotero.org) user, and you want Inquerex to generate `zotero://open-pdf` links to open PDFs instead of `inquerex://` links, then type `prefer_zotero_links="y"` on a line by itself anywhere in the Settings file. Note that there's a significant limitation with `zotero://open-pdf` links, however: Zotero can only open PDFs to pages that have integers as page labels (e.g., 1, 2, 3, etc.). Unless you edit Zotero's code, it can't open PDFs to pages with any other page label type (e.g, "xi" or "Appendix I"). In contrast, Inquerex can open a PDF to any page with any page label so long as the page label contains only numbers and English letters without accents (see [Allowed Characters](#allowed-characters) above).
* **Exiting with a Non-Zero Status**<a id="exiting-with-a-non-zero-status"></a>: If your computer issues an alert that says Inquerex "exited with a non-zero status," then either there's something that needs to be fixed in Inquerex's source code or there's something amiss about the input for the current search (e.g., a filename contains a forbidden character). Or both. If you want help troubleshooting what happened, and if you're able, send an email to support@inquerex.com with a copy of the `lines.log` file attached. You'll find the `lines.log` file in the Logs folder in your Inquerex folder.

## End-User License Agreement

&#xA9; 2022, Brian Lee

brian@inquerex.com

www.inquerex.com

>This software (any 'prototype' version of Inquerex) is distributed on an 'as is' basis, without warranties or conditions of any kind, either express or implied. Modification is permitted, but all redistribution, with or without modification, is prohibited.

## Other Licenses

Inquerex makes function calls to a handful of [free software](https://www.gnu.org/philosophy/open-source-misses-the-point.html) libraries, each of which may be redistributed (for free or commercially) in accordance with its license:

| Name | License |
| :------------ | :------------ |
| [dos2unix](https://waterlan.home.xs4all.nl/dos2unix.html) | [FreeBSD](https://waterlan.home.xs4all.nl/dos2unix/COPYING.txt) |
| [gnu grep](https://www.gnu.org/software/grep/manual/grep.html) | [GPLv3](https://www.gnu.org/software/grep/manual/grep.html#Copying) |
| [pdfgrep](https://pdfgrep.org/) | [GPLv2](https://gitlab.com/pdfgrep/pdfgrep/-/blob/master/COPYING) |
| [pdfinfo](https://www.xpdfreader.com/pdfinfo-man.html) | [GPLv2 and/or GPLv3](https://www.xpdfreader.com/opensource.html) |
| [pdfpagelabels](https://github.com/HeimMatthias/pdfpagelabels) | [GPLv3](https://github.com/HeimMatthias/pdfpagelabels/blob/main/LICENSE) |
| [pdftotext](https://www.xpdfreader.com/pdftotext-man.html) | [GPLv2 and/or GPLv3](https://www.xpdfreader.com/opensource.html) |
| [wkhtmltopdf](https://wkhtmltopdf.org/) | [LGPLv3](https://github.com/wkhtmltopdf/wkhtmltopdf/blob/master/LICENSE) |
| [xml starlet](http://xmlstar.sourceforge.net/) | [MIT](http://xmlstar.sourceforge.net/license.php) |
