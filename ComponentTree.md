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
│    ├─ ++ Must haves
│    │   ├─ "<template #title>{{ project.title }} —</template>"
│    │   └─ in <script>
│    │       ├─ import projects.json
│    │       ├─ return "projects: require('~/Assets/projects.json')"
│    │       └─ input project id to get the correct title for the case study ++
│    └─ < Media (video or image component) >
│
├─ < IntroStructure >
│    ├─ < IntroWork > ++ 6 slots / child component choices are optional ++
│    │   ├─ ( written content; can add spans for emphasis )
│    │   ├─ < CopyPills >
│    │   └─ < ConciseSwitch > ++ must be on every [ Work ] page ++
│    └─ < IntroOverview > ++ 4 slots / child component choices are optional ++
│        ├─ ( written content; must include parent tags like p or ul; can add spans for emphasis )
│        └─ < PillsAlone > ++ pair with other tags to add caption, does not include a child title ++
│
├─ < IntroHowMightWe > ++ has props to fill in text and append with a background color / 2 slots ++
│    ├─ ( written subtitle and caption in #caption slot )
│    └─ < Media (video or image component) > in #media slot
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
├─ < OutroCredits > ++ title prop / this is only required for group projects ++
│    └─ < ContentSmallScroller > ++ 1 slot, fill with content/components ++
│        └─ < ScrollerSmallCard > ++ title prop & fill with content ++
│
├─ < PreFooter >
└─ < FooterSection >
```