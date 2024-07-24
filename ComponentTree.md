# Page and Component Architecture

```bash
Legend
    [ Page ]
    < Component >
    ( non-component content )
    ++ Pertinent usage information ++
```

```bash
[ all pages ]
├─ < CustomCursor >
│
├─ < NavBar >
│    └─ < ButtonSmall >
│
├─ OTHER COMPONENTS AND CONTENT
│
├─ < PreFooter >
└─ < FooterSection >
```

## Specific Pages

```bash
[ Home ]
├─ < CustomCursor >
│
├─ < NavBar >
│    └─ < ButtonSmall >
│
├─ < JumbotronHome >
│    ├─ ++ Honestly could probably lose this and just use the VideoPlayer ++
│    └─ < VideoPlayer >
│
├─ ( personal introduction )
│    ├─ < WorkAvailability >
│    └─ < ButtonSmall >
│
├─ < CoverHome >
│    └─ ++ Will fill space so must go inside a parent div with width or column specifications ++
│
├─ < PreFooter >
└─ < FooterSection >
```

```bash
[ Work case studies ]
├─ < CustomCursor >
│
├─ < NavBar >
│    └─ < ButtonSmall >
│
├─ < IntroTitle >
│    └─ ++ Must haves
│        ├─ "<template #title>{{ project.title }} —</template>"
│        └─ in <script>
│            ├─ import projects.json
│            ├─ return "projects: require('~/Assets/projects.json')"
│            └─ input project id to get the correct title for the case study ++
│
├─ < IntroStructure >
│    ├─ < IntroWork > ++ 6 slots / child component choices are optional ++
│    │   ├─ < CopyPills >
│    │   └─ < ConciseSwitch > ++ must be on every [ Work ] page ++
│    └─ < IntroOverview > ++ 4 slots / child component choices are optional ++
│
├─ < IntroHowMightWe > ++ has props to fill in text and append with a background color / 2 slots ++
│
├─ < IntroHighlights >
│    ├─ ++ this is a parent to structure and title the ContentScroller component ++
│    └─ < ContentScroller >
│        ├─ ++ built as the horizontal scrolling parent for "Scroller" components ++
│        ├─ ++ contains a slot that's passed through for implementation with IntroHighlights ++
│        ├─ < ScrollerVideo >
│        ├─ < ScrollerImage >
│        └─ ++ more to come ++
│
├─ < OutroHighlightsWork > ++ 2 slots for centered or full-width content ++
│
├─ < OutroCredits > ++ title prop / this is only required for group projects ++
│    └─ < ContentSmallScroller > ++ 1 slot, fill with content/components ++
│        └─ < ScrollerSmallCard > ++ title prop & fill with content ++
│
├─ < PreFooter >
└─ < FooterSection >
```