


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Backbone-relational/backbone-relational.js at master · chaonextdoor/Backbone-relational</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="PTyeFrl/dlMjAsxumvl81vcW5LQHbS80BTLnu23oRnA=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-4d2775eb2ad81f272c7df546adf129ebc4a350ab.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github2-5ab64ac97650d8573ae90dab55d0169f7850d0f9.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/frameworks-7b5694dece50ddf8456fccf7884bd83581722a3f.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-95f175cb9e0daaf1fc42d17256b3e8137359a20f.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/chaonextdoor/Backbone-relational/blob/080b8268e2ac1ddb32e2bffe169d435efd87c3b3/backbone-relational.js'>
    <meta property="og:title" content="Backbone-relational"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/chaonextdoor/Backbone-relational"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329920549"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Backbone-relational - Get and set relations (one-to-one, one-to-many, many-to-one) for Backbone models"/>

    <meta name="description" content="Backbone-relational - Get and set relations (one-to-one, one-to-many, many-to-one) for Backbone models" />
  <link href="https://github.com/chaonextdoor/Backbone-relational/commits/master.atom" rel="alternate" title="Recent Commits to Backbone-relational:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public fork env-production " data-blob-contribs-enabled="yes">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1329920549" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1329920549" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1329920549" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1329920549" />
          </a>

              
    <div class="topsearch ">
<form accept-charset="UTF-8" action="/search" id="top_search_form" method="get"><input name="utf8" type="hidden" value="&#x2713;" />        <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon advanced-search"></span></a>
        <div class="search placeholder-field js-placeholder-field">
          <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete" placeholder="Search&hellip;" />
          <div id="my-repos-autocomplete" class="autocomplete-results">
            <ul class="js-navigation-container"></ul>
          </div>
          <input type="submit" value="Search" class="button">
          <span class="mini-icon search-input"></span>
        </div>
        <input type="hidden" name="type" value="Everything" />
        <input type="hidden" name="repo" value="" />
        <input type="hidden" name="langOverride" value="" />
        <input type="hidden" name="start_value" value="1" />
</form>      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/chaonextdoor"><img height="20" src="https://secure.gravatar.com/avatar/ef0f02feabc736e41338ada3face3757?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/chaonextdoor" class="name">chaonextdoor</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon new-repo"></span></a>
      </li>
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="mini-icon notifications"></span>
        </a>
      </li>
      <li><a href="/settings/profile" id="settings" class="tooltipped downwards" title="Account Settings"><span class="mini-icon account-settings"></span></a></li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Log Out"><span class="mini-icon logout"></span></a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">

          <li class="for-owner"><a href="/chaonextdoor/Backbone-relational/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>

          <li class="js-toggler-container watch-button-container on">
            <a href="/chaonextdoor/Backbone-relational/toggle_watch" class="minibutton btn-watch watch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Watch</span></a>
            <a href="/chaonextdoor/Backbone-relational/toggle_watch" class="minibutton btn-watch unwatch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Unwatch</span></a>
          </li>

              <li><a href="/chaonextdoor/Backbone-relational/fork" class="minibutton btn-fork fork-button" data-method="post" rel="nofollow"><span><span class="icon"></span>Fork</span></a></li>

              <li class="nspr">
                <a href="/chaonextdoor/Backbone-relational/pull/new/master" class="minibutton btn-pull-request "><span><span class="icon"></span>Pull Request</span></a>
              </li>


      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers watching">
            <a href="/chaonextdoor/Backbone-relational/watchers" title="Watchers — You're Watching" class="tooltipped downwards">
              1
            </a>
          </li>
          <li class="forks">
            <a href="/chaonextdoor/Backbone-relational/network" title="Forks" class="tooltipped downwards">
              64
            </a>
          </li>
        </ul>
      </li>
    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title">
            <span class="mini-icon public-repo"></span>
            <span class="author vcard">
<a href="/chaonextdoor" class="url fn" itemprop="url" rel="author">              <span itemprop="title">chaonextdoor</span>
              </a></span> /
            <strong><a href="/chaonextdoor/Backbone-relational" class="js-current-repository">Backbone-relational</a></strong>
              <span class="fork-flag">
                <span class="text">forked from <a href="/PaulUithol/Backbone-relational">PaulUithol/Backbone-relational</a></span>
              </span>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/chaonextdoor/Backbone-relational" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/chaonextdoor/Backbone-relational/network" highlight="repo_network">Network</a>
    <li><a href="/chaonextdoor/Backbone-relational/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>


      <li><a href="/chaonextdoor/Backbone-relational/wiki" highlight="repo_wiki">Wiki <span class='counter'>0</span></a></li>

    <li><a href="/chaonextdoor/Backbone-relational/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>

  </ul>
 
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/chaonextdoor/Backbone-relational/tree-list/080b8268e2ac1ddb32e2bffe169d435efd87c3b3"
      data-blob-url-prefix="/chaonextdoor/Backbone-relational/blob/080b8268e2ac1ddb32e2bffe169d435efd87c3b3"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/chaonextdoor/Backbone-relational">Backbone-relational</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/chaonextdoor/Backbone-relational/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input name="utf8" type="hidden" value="&#x2713;" />
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/chaonextdoor/Backbone-relational/tags" class="" highlight="repo_tags">Tags <span class="counter">2</span></a></li>
    <li><a href="/chaonextdoor/Backbone-relational/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-master-branch="master"
           data-ref="master">
          <span><span class="icon"></span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"></a>
          <div class="context-title">Switch Branches/Tags</div>
          <div class="context-body pane-selector commitish-selector js-filterable-commitishes">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="commitish-filter" placeholder="Filter branches/tags" />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

              <div class="commitish-item branch-commitish selector-item">
                <h4>
                    <a href="/chaonextdoor/Backbone-relational/blob/cascadeEvents/backbone-relational.js" data-name="cascadeEvents" rel="nofollow">cascadeEvents</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item">
                <h4>
                    <a href="/chaonextdoor/Backbone-relational/blob/master/backbone-relational.js" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>

              <div class="commitish-item tag-commitish selector-item">
                <h4>
                    <a href="/chaonextdoor/Backbone-relational/blob/0.5.0/backbone-relational.js" data-name="0.5.0" rel="nofollow">0.5.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item">
                <h4>
                    <a href="/chaonextdoor/Backbone-relational/blob/0.4.0/backbone-relational.js" data-name="0.4.0" rel="nofollow">0.4.0</a>
                </h4>
              </div>

            <div class="no-results" style="display:none">Nothing to show</div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/chaonextdoor/Backbone-relational" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/chaonextdoor/Backbone-relational/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/chaonextdoor/Backbone-relational/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">2</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        





<!-- block_view_fragment_key: views7/v8/blob:v21:e6aab7d87b848a22507e101634ee8e45 -->
  <div id="slider">

    <div class="breadcrumb" data-path="backbone-relational.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/chaonextdoor/Backbone-relational/tree/080b8268e2ac1ddb32e2bffe169d435efd87c3b3" class="js-rewrite-sha" itemprop="url"><span itemprop="title">Backbone-relational</span></a></b> / <strong class="final-path">backbone-relational.js</strong> <span class="js-clippy mini-icon clippy " data-clipboard-text="backbone-relational.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>


      <div class="commit file-history-tease" data-path="backbone-relational.js/">
        <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/b5c0cf186026bae6da5144f24573269f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
        <span class="author"><a href="/PaulUithol">PaulUithol</a></span>
        <time class="js-relative-date" datetime="2012-04-23T05:25:34-07:00" title="2012-04-23 05:25:34">April 23, 2012</time>
        <div class="commit-title">
            <a href="/chaonextdoor/Backbone-relational/commit/080b8268e2ac1ddb32e2bffe169d435efd87c3b3" class="message">Merge pull request </a><a href="https://github.com/PaulUithol/Backbone-relational/issues/107" title="Fire `relational:reset` and thus `related:reset` events on-sort." class="issue-link">#107</a><a href="/chaonextdoor/Backbone-relational/commit/080b8268e2ac1ddb32e2bffe169d435efd87c3b3" class="message"> from DouweM/reset-event-on-sort</a>
        </div>

        <div class="participation">
          <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>11</strong> contributors</a></p>
              <a class="avatar tooltipped downwards" title="PaulUithol" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=PaulUithol"><img height="20" src="https://secure.gravatar.com/avatar/b5c0cf186026bae6da5144f24573269f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ulmus" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=ulmus"><img height="20" src="https://secure.gravatar.com/avatar/98df33fec473d90367b9b91d4d7edc2c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="DouweM" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=DouweM"><img height="20" src="https://secure.gravatar.com/avatar/ec0f14f1d5c812f6c2a79a83badf6c76?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="emilisto" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=emilisto"><img height="20" src="https://secure.gravatar.com/avatar/e08845fcc74d08565336927654db7a7e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="singingwolfboy" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=singingwolfboy"><img height="20" src="https://secure.gravatar.com/avatar/50ddfc90a4b83f975f22aba230ad8af8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dvv" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=dvv"><img height="20" src="https://secure.gravatar.com/avatar/8ba6cca99f430db0e2d69d57485d0e70?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="pgherveou" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=pgherveou"><img height="20" src="https://secure.gravatar.com/avatar/667902f88f1827cbae141f4460a9cf5a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="toekneestuck" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=toekneestuck"><img height="20" src="https://secure.gravatar.com/avatar/910eaf3f7d1a3c2f30bed9c0456bbb46?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="quasiyoke" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=quasiyoke"><img height="20" src="https://secure.gravatar.com/avatar/75f5c8e1916436075414f10e00a8730c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="4vanger" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=4vanger"><img height="20" src="https://secure.gravatar.com/avatar/bff933bdab4098061ca237d0926feb69?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="andris-silis" href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js?author=andris-silis"><img height="20" src="https://secure.gravatar.com/avatar/02c0828a75c2230aca0edc9f62ba32bd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>


        </div>
        <div id="blob_contributors_box" style="display:none">
          <h2>Users on GitHub who have contributed to this file</h2>
          <ul class="facebox-user-list">
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/b5c0cf186026bae6da5144f24573269f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/PaulUithol">PaulUithol</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/98df33fec473d90367b9b91d4d7edc2c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/ulmus">ulmus</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/ec0f14f1d5c812f6c2a79a83badf6c76?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/DouweM">DouweM</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/e08845fcc74d08565336927654db7a7e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/emilisto">emilisto</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/50ddfc90a4b83f975f22aba230ad8af8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/singingwolfboy">singingwolfboy</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/8ba6cca99f430db0e2d69d57485d0e70?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/dvv">dvv</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/667902f88f1827cbae141f4460a9cf5a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/pgherveou">pgherveou</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/910eaf3f7d1a3c2f30bed9c0456bbb46?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/toekneestuck">toekneestuck</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/75f5c8e1916436075414f10e00a8730c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/quasiyoke">quasiyoke</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/bff933bdab4098061ca237d0926feb69?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/4vanger">4vanger</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/02c0828a75c2230aca0edc9f62ba32bd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/andris-silis">andris-silis</a>
            </li>
          </ul>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="backbone-relational.js/" data-permalink-url="/chaonextdoor/Backbone-relational/blob/080b8268e2ac1ddb32e2bffe169d435efd87c3b3/backbone-relational.js" data-title="Backbone-relational/backbone-relational.js at master · chaonextdoor/Backbone-relational · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon text-file"></b></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>1426 lines (1222 sloc)</span>
                <span>46.104 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/chaonextdoor/Backbone-relational/edit/080b8268e2ac1ddb32e2bffe169d435efd87c3b3/backbone-relational.js" data-method="post" rel="nofollow"><span>Edit this file</span></a>
                  </li>

                <li>
                  <a href="/chaonextdoor/Backbone-relational/raw/master/backbone-relational.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url"><span><span class="icon"></span>Raw</span></a>
                </li>
                  <li>
                    <a href="/chaonextdoor/Backbone-relational/blame/master/backbone-relational.js" class="minibutton btn-blame grouped-button bigger lighter"><span><span class="icon"></span>Blame</span></a>
                  </li>
                <li>
                  <a href="/chaonextdoor/Backbone-relational/commits/master/backbone-relational.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow"><span><span class="icon"></span>History</span></a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**	</span></div><div class='line' id='LC2'><span class="cm"> * Backbone-relational.js 0.5.0</span></div><div class='line' id='LC3'><span class="cm"> * (c) 2011 Paul Uithol</span></div><div class='line' id='LC4'><span class="cm"> * </span></div><div class='line' id='LC5'><span class="cm"> * Backbone-relational may be freely distributed under the MIT license.</span></div><div class='line' id='LC6'><span class="cm"> * For details and documentation: https://github.com/PaulUithol/Backbone-relational.</span></div><div class='line' id='LC7'><span class="cm"> * Depends on Backbone: https://github.com/documentcloud/backbone.</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>	<span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>	<span class="cm">/**</span></div><div class='line' id='LC13'><span class="cm">	 * CommonJS shim</span></div><div class='line' id='LC14'><span class="cm">	 **/</span></div><div class='line' id='LC15'>	<span class="kd">var</span> <span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">,</span> <span class="nx">exports</span><span class="p">;</span></div><div class='line' id='LC16'>	<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nb">window</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'>		<span class="nx">_</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span> <span class="s1">&#39;underscore&#39;</span> <span class="p">);</span></div><div class='line' id='LC18'>		<span class="nx">Backbone</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span> <span class="s1">&#39;backbone&#39;</span> <span class="p">);</span></div><div class='line' id='LC19'>		<span class="nx">exports</span> <span class="o">=</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">;</span></div><div class='line' id='LC20'>	<span class="p">}</span></div><div class='line' id='LC21'>	<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC22'>		<span class="kd">var</span> <span class="nx">_</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC23'>		<span class="nx">Backbone</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Backbone</span><span class="p">;</span></div><div class='line' id='LC24'>		<span class="nx">exports</span> <span class="o">=</span> <span class="nb">window</span><span class="p">;</span></div><div class='line' id='LC25'>	<span class="p">}</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC28'>		<span class="nx">showWarnings</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC29'>	<span class="p">};</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>	<span class="cm">/**</span></div><div class='line' id='LC32'><span class="cm">	 * Semaphore mixin; can be used as both binary and counting.</span></div><div class='line' id='LC33'><span class="cm">	 **/</span></div><div class='line' id='LC34'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Semaphore</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC35'>		<span class="nx">_permitsAvailable</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC36'>		<span class="nx">_permitsUsed</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>		<span class="nx">acquire</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC39'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_permitsAvailable</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_permitsUsed</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_permitsAvailable</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span> <span class="s1">&#39;Max permits acquired&#39;</span> <span class="p">);</span></div><div class='line' id='LC41'>			<span class="p">}</span></div><div class='line' id='LC42'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC43'>				<span class="k">this</span><span class="p">.</span><span class="nx">_permitsUsed</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC44'>			<span class="p">}</span></div><div class='line' id='LC45'>		<span class="p">},</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>		<span class="nx">release</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC48'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_permitsUsed</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span> <span class="s1">&#39;All permits released&#39;</span> <span class="p">);</span></div><div class='line' id='LC50'>			<span class="p">}</span></div><div class='line' id='LC51'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC52'>				<span class="k">this</span><span class="p">.</span><span class="nx">_permitsUsed</span><span class="o">--</span><span class="p">;</span></div><div class='line' id='LC53'>			<span class="p">}</span></div><div class='line' id='LC54'>		<span class="p">},</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>		<span class="nx">isLocked</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC57'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_permitsUsed</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC58'>		<span class="p">},</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>		<span class="nx">setAvailablePermits</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">amount</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_permitsUsed</span> <span class="o">&gt;</span> <span class="nx">amount</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span> <span class="s1">&#39;Available permits cannot be less than used permits&#39;</span> <span class="p">);</span></div><div class='line' id='LC63'>			<span class="p">}</span></div><div class='line' id='LC64'>			<span class="k">this</span><span class="p">.</span><span class="nx">_permitsAvailable</span> <span class="o">=</span> <span class="nx">amount</span><span class="p">;</span></div><div class='line' id='LC65'>		<span class="p">}</span></div><div class='line' id='LC66'>	<span class="p">};</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>	<span class="cm">/**</span></div><div class='line' id='LC69'><span class="cm">	 * A BlockingQueue that accumulates items while blocked (via &#39;block&#39;),</span></div><div class='line' id='LC70'><span class="cm">	 * and processes them when unblocked (via &#39;unblock&#39;).</span></div><div class='line' id='LC71'><span class="cm">	 * Process can also be called manually (via &#39;process&#39;).</span></div><div class='line' id='LC72'><span class="cm">	 */</span></div><div class='line' id='LC73'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">BlockingQueue</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC74'>		<span class="k">this</span><span class="p">.</span><span class="nx">_queue</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC75'>	<span class="p">};</span></div><div class='line' id='LC76'>	<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">BlockingQueue</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Semaphore</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC77'>		<span class="nx">_queue</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>		<span class="nx">add</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">func</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">isBlocked</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>				<span class="k">this</span><span class="p">.</span><span class="nx">_queue</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">func</span> <span class="p">);</span></div><div class='line' id='LC82'>			<span class="p">}</span></div><div class='line' id='LC83'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC84'>				<span class="nx">func</span><span class="p">();</span></div><div class='line' id='LC85'>			<span class="p">}</span></div><div class='line' id='LC86'>		<span class="p">},</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>		<span class="nx">process</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC89'>			<span class="k">while</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_queue</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_queue</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC90'>				<span class="k">this</span><span class="p">.</span><span class="nx">_queue</span><span class="p">.</span><span class="nx">shift</span><span class="p">()();</span></div><div class='line' id='LC91'>			<span class="p">}</span></div><div class='line' id='LC92'>		<span class="p">},</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>		<span class="nx">block</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC95'>			<span class="k">this</span><span class="p">.</span><span class="nx">acquire</span><span class="p">();</span></div><div class='line' id='LC96'>		<span class="p">},</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>		<span class="nx">unblock</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC99'>			<span class="k">this</span><span class="p">.</span><span class="nx">release</span><span class="p">();</span></div><div class='line' id='LC100'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isBlocked</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC101'>				<span class="k">this</span><span class="p">.</span><span class="nx">process</span><span class="p">();</span></div><div class='line' id='LC102'>			<span class="p">}</span></div><div class='line' id='LC103'>		<span class="p">},</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>		<span class="nx">isBlocked</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC106'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">isLocked</span><span class="p">();</span></div><div class='line' id='LC107'>		<span class="p">}</span></div><div class='line' id='LC108'>	<span class="p">});</span></div><div class='line' id='LC109'>	<span class="cm">/**</span></div><div class='line' id='LC110'><span class="cm">	 * Global event queue. Accumulates external events (&#39;add:&lt;key&gt;&#39;, &#39;remove:&lt;key&gt;&#39; and &#39;update:&lt;key&gt;&#39;)</span></div><div class='line' id='LC111'><span class="cm">	 * until the top-level object is fully initialized (see &#39;Backbone.RelationalModel&#39;).</span></div><div class='line' id='LC112'><span class="cm">	 */</span></div><div class='line' id='LC113'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">BlockingQueue</span><span class="p">();</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>	<span class="cm">/**</span></div><div class='line' id='LC116'><span class="cm">	 * Backbone.Store keeps track of all created (and destruction of) Backbone.RelationalModel.</span></div><div class='line' id='LC117'><span class="cm">	 * Handles lookup for relations.</span></div><div class='line' id='LC118'><span class="cm">	 */</span></div><div class='line' id='LC119'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Store</span> <span class="o">=</span>  <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC120'>		<span class="k">this</span><span class="p">.</span><span class="nx">_collections</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC121'>		<span class="k">this</span><span class="p">.</span><span class="nx">_reverseRelations</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC122'>	<span class="p">};</span></div><div class='line' id='LC123'>	<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Store</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Events</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC124'>		<span class="nx">_collections</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC125'>		<span class="nx">_reverseRelations</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>		<span class="cm">/**</span></div><div class='line' id='LC128'><span class="cm">		 * Add a reverse relation. Is added to the &#39;relations&#39; property on model&#39;s prototype, and to</span></div><div class='line' id='LC129'><span class="cm">		 * existing instances of &#39;model&#39; in the store as well.</span></div><div class='line' id='LC130'><span class="cm">		 * @param {object} relation</span></div><div class='line' id='LC131'><span class="cm">		 * @param {Backbone.RelationalModel} relation.model</span></div><div class='line' id='LC132'><span class="cm">		 * @param {String} relation.type</span></div><div class='line' id='LC133'><span class="cm">		 * @param {String} relation.key</span></div><div class='line' id='LC134'><span class="cm">		 * @param {String|object} relation.relatedModel</span></div><div class='line' id='LC135'><span class="cm">		 */</span></div><div class='line' id='LC136'>		<span class="nx">addReverseRelation</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC137'>			<span class="kd">var</span> <span class="nx">exists</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_reverseRelations</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">rel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC138'>				<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">all</span><span class="p">(</span> <span class="nx">relation</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">key</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC139'>					<span class="k">return</span> <span class="nx">val</span> <span class="o">===</span> <span class="nx">rel</span><span class="p">[</span> <span class="nx">key</span> <span class="p">];</span></div><div class='line' id='LC140'>				<span class="p">});</span></div><div class='line' id='LC141'>			<span class="p">});</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">exists</span> <span class="o">&amp;&amp;</span> <span class="nx">relation</span><span class="p">.</span><span class="nx">model</span> <span class="o">&amp;&amp;</span> <span class="nx">relation</span><span class="p">.</span><span class="nx">type</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>				<span class="k">this</span><span class="p">.</span><span class="nx">_reverseRelations</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">);</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>				<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">relation</span><span class="p">.</span><span class="nx">model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">relations</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>					<span class="nx">relation</span><span class="p">.</span><span class="nx">model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">relations</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC148'>				<span class="p">}</span></div><div class='line' id='LC149'>				<span class="nx">relation</span><span class="p">.</span><span class="nx">model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">relations</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">);</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>				<span class="k">this</span><span class="p">.</span><span class="nx">retroFitRelation</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">);</span></div><div class='line' id='LC152'>			<span class="p">}</span></div><div class='line' id='LC153'>		<span class="p">},</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>		<span class="cm">/**</span></div><div class='line' id='LC156'><span class="cm">		 * Add a &#39;relation&#39; to all existing instances of &#39;relation.model&#39; in the store</span></div><div class='line' id='LC157'><span class="cm">		 * @param {object} relation</span></div><div class='line' id='LC158'><span class="cm">		 */</span></div><div class='line' id='LC159'>		<span class="nx">retroFitRelation</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC160'>			<span class="kd">var</span> <span class="nx">coll</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getCollection</span><span class="p">(</span> <span class="nx">relation</span><span class="p">.</span><span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC161'>			<span class="nx">coll</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC162'>				<span class="k">new</span> <span class="nx">relation</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">relation</span> <span class="p">);</span></div><div class='line' id='LC163'>			<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC164'>		<span class="p">},</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>		<span class="cm">/**</span></div><div class='line' id='LC167'><span class="cm">		 * Find the Store&#39;s collection for a certain type of model.</span></div><div class='line' id='LC168'><span class="cm">		 * @param {Backbone.RelationalModel} model</span></div><div class='line' id='LC169'><span class="cm">		 * @return {Backbone.Collection} A collection if found (or applicable for &#39;model&#39;), or null</span></div><div class='line' id='LC170'><span class="cm">		 */</span></div><div class='line' id='LC171'>		<span class="nx">getCollection</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'>			<span class="kd">var</span> <span class="nx">coll</span> <span class="o">=</span>  <span class="nx">_</span><span class="p">.</span><span class="nx">detect</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_collections</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">c</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC173'>					<span class="c1">// Check if model is the type itself (a ref to the constructor), or is of type c.model</span></div><div class='line' id='LC174'>					<span class="k">return</span> <span class="nx">model</span> <span class="o">===</span> <span class="nx">c</span><span class="p">.</span><span class="nx">model</span> <span class="o">||</span> <span class="nx">model</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">===</span> <span class="nx">c</span><span class="p">.</span><span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC175'>				<span class="p">});</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">coll</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC178'>				<span class="nx">coll</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_createCollection</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC179'>			<span class="p">}</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>			<span class="k">return</span> <span class="nx">coll</span><span class="p">;</span></div><div class='line' id='LC182'>		<span class="p">},</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>		<span class="cm">/**</span></div><div class='line' id='LC185'><span class="cm">		 * Find a type on the global object by name. Splits name on dots.</span></div><div class='line' id='LC186'><span class="cm">		 * @param {String} name</span></div><div class='line' id='LC187'><span class="cm">		 * @return {Object}</span></div><div class='line' id='LC188'><span class="cm">		 */</span></div><div class='line' id='LC189'>		<span class="nx">getObjectByName</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">name</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>			<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span> <span class="nx">name</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="s1">&#39;.&#39;</span> <span class="p">),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">val</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC191'>				<span class="k">return</span> <span class="nx">memo</span><span class="p">[</span> <span class="nx">val</span> <span class="p">];</span></div><div class='line' id='LC192'>			<span class="p">},</span> <span class="nx">exports</span><span class="p">);</span></div><div class='line' id='LC193'>			<span class="k">return</span> <span class="nx">type</span> <span class="o">!==</span> <span class="nx">exports</span> <span class="o">?</span> <span class="nx">type</span><span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC194'>		<span class="p">},</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>		<span class="nx">_createCollection</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">type</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC197'>			<span class="kd">var</span> <span class="nx">coll</span><span class="p">;</span></div><div class='line' id='LC198'><br/></div><div class='line' id='LC199'>			<span class="c1">// If &#39;type&#39; is an instance, take it&#39;s constructor</span></div><div class='line' id='LC200'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">type</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">RelationalModel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC201'>				<span class="nx">type</span> <span class="o">=</span> <span class="nx">type</span><span class="p">.</span><span class="nx">constructor</span><span class="p">;</span></div><div class='line' id='LC202'>			<span class="p">}</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>			<span class="c1">// Type should inherit from Backbone.RelationalModel.</span></div><div class='line' id='LC205'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">type</span><span class="p">.</span><span class="nx">prototype</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">RelationalModel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC206'>				<span class="nx">coll</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">();</span></div><div class='line' id='LC207'>				<span class="nx">coll</span><span class="p">.</span><span class="nx">model</span> <span class="o">=</span> <span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>				<span class="k">this</span><span class="p">.</span><span class="nx">_collections</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">coll</span> <span class="p">);</span></div><div class='line' id='LC210'>			<span class="p">}</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'>			<span class="k">return</span> <span class="nx">coll</span><span class="p">;</span></div><div class='line' id='LC213'>		<span class="p">},</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>		<span class="cm">/**</span></div><div class='line' id='LC216'><span class="cm">		 * Find an id</span></div><div class='line' id='LC217'><span class="cm">		 * @param type</span></div><div class='line' id='LC218'><span class="cm">		 * @param {String|Number|Object|Backbone.RelationalModel} item</span></div><div class='line' id='LC219'><span class="cm">		 */</span></div><div class='line' id='LC220'>		<span class="nx">resolveIdForItem</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC221'>			<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="o">?</span> <span class="nx">item</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">id</span> <span class="o">==</span> <span class="kc">null</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">item</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">RelationalModel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC225'>					<span class="nx">id</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC226'>				<span class="p">}</span></div><div class='line' id='LC227'>				<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC228'>					<span class="nx">id</span> <span class="o">=</span> <span class="nx">item</span><span class="p">[</span> <span class="nx">type</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">idAttribute</span> <span class="p">];</span></div><div class='line' id='LC229'>				<span class="p">}</span></div><div class='line' id='LC230'>			<span class="p">}</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>			<span class="k">return</span> <span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC233'>		<span class="p">},</span></div><div class='line' id='LC234'><br/></div><div class='line' id='LC235'>		<span class="cm">/**</span></div><div class='line' id='LC236'><span class="cm">		 *</span></div><div class='line' id='LC237'><span class="cm">		 * @param type</span></div><div class='line' id='LC238'><span class="cm">		 * @param {String|Number|Object|Backbone.RelationalModel} item</span></div><div class='line' id='LC239'><span class="cm">		 */</span></div><div class='line' id='LC240'>		<span class="nx">find</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC241'>			<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">resolveIdForItem</span><span class="p">(</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">item</span> <span class="p">);</span></div><div class='line' id='LC242'>			<span class="kd">var</span> <span class="nx">coll</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getCollection</span><span class="p">(</span> <span class="nx">type</span> <span class="p">);</span></div><div class='line' id='LC243'>			<span class="k">return</span> <span class="nx">coll</span> <span class="o">&amp;&amp;</span> <span class="nx">coll</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="nx">id</span> <span class="p">);</span></div><div class='line' id='LC244'>		<span class="p">},</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>		<span class="cm">/**</span></div><div class='line' id='LC247'><span class="cm">		 * Add a &#39;model&#39; to it&#39;s appropriate collection. Retain the original contents of &#39;model.collection&#39;.</span></div><div class='line' id='LC248'><span class="cm">		 * @param {Backbone.RelationalModel} model</span></div><div class='line' id='LC249'><span class="cm">		 */</span></div><div class='line' id='LC250'>		<span class="nx">register</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC251'>			<span class="kd">var</span> <span class="nx">modelColl</span> <span class="o">=</span> <span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">;</span></div><div class='line' id='LC252'>			<span class="kd">var</span> <span class="nx">coll</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getCollection</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC253'>			<span class="nx">coll</span> <span class="o">&amp;&amp;</span> <span class="nx">coll</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC254'>			<span class="nx">model</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;destroy&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">unregister</span><span class="p">,</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC255'>			<span class="nx">model</span><span class="p">.</span><span class="nx">collection</span> <span class="o">=</span> <span class="nx">modelColl</span><span class="p">;</span></div><div class='line' id='LC256'>		<span class="p">},</span></div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>		<span class="cm">/**</span></div><div class='line' id='LC259'><span class="cm">		 * Explicitly update a model&#39;s id in it&#39;s store collection</span></div><div class='line' id='LC260'><span class="cm">		 * @param {Backbone.RelationalModel} model</span></div><div class='line' id='LC261'><span class="cm">		 */</span></div><div class='line' id='LC262'>		<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC263'>			<span class="kd">var</span> <span class="nx">coll</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getCollection</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC264'>			<span class="nx">coll</span><span class="p">.</span><span class="nx">_onModelEvent</span><span class="p">(</span> <span class="s1">&#39;change:&#39;</span> <span class="o">+</span> <span class="nx">model</span><span class="p">.</span><span class="nx">idAttribute</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">coll</span> <span class="p">);</span></div><div class='line' id='LC265'>		<span class="p">},</span></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>		<span class="cm">/**</span></div><div class='line' id='LC268'><span class="cm">		 * Remove a &#39;model&#39; from the store.</span></div><div class='line' id='LC269'><span class="cm">		 * @param {Backbone.RelationalModel} model</span></div><div class='line' id='LC270'><span class="cm">		 */</span></div><div class='line' id='LC271'>		<span class="nx">unregister</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC272'>			<span class="nx">model</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span> <span class="s1">&#39;destroy&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">unregister</span> <span class="p">);</span></div><div class='line' id='LC273'>			<span class="kd">var</span> <span class="nx">coll</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getCollection</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC274'>			<span class="nx">coll</span> <span class="o">&amp;&amp;</span> <span class="nx">coll</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC275'>		<span class="p">}</span></div><div class='line' id='LC276'>	<span class="p">});</span></div><div class='line' id='LC277'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Store</span><span class="p">();</span></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'>	<span class="cm">/**</span></div><div class='line' id='LC280'><span class="cm">	 * The main Relation class, from which &#39;HasOne&#39; and &#39;HasMany&#39; inherit. Internally, &#39;relational:&lt;key&gt;&#39; events</span></div><div class='line' id='LC281'><span class="cm">	 * are used to regulate addition and removal of models from relations.</span></div><div class='line' id='LC282'><span class="cm">	 *</span></div><div class='line' id='LC283'><span class="cm">	 * @param {Backbone.RelationalModel} instance</span></div><div class='line' id='LC284'><span class="cm">	 * @param {object} options</span></div><div class='line' id='LC285'><span class="cm">	 * @param {string} options.key</span></div><div class='line' id='LC286'><span class="cm">	 * @param {Backbone.RelationalModel.constructor} options.relatedModel</span></div><div class='line' id='LC287'><span class="cm">	 * @param {Boolean|String} [options.includeInJSON=true] Serialize the given attribute for related model(s)&#39; in toJSON,  or just their ids.</span></div><div class='line' id='LC288'><span class="cm">	 * @param {Boolean} [options.createModels=true] Create objects from the contents of keys if the object is not found in Backbone.store.</span></div><div class='line' id='LC289'><span class="cm">	 * @param {object} [options.reverseRelation] Specify a bi-directional relation. If provided, Relation will reciprocate</span></div><div class='line' id='LC290'><span class="cm">	 *    the relation to the &#39;relatedModel&#39;. Required and optional properties match &#39;options&#39;, except that it also needs</span></div><div class='line' id='LC291'><span class="cm">	 *    {Backbone.Relation|String} type (&#39;HasOne&#39; or &#39;HasMany&#39;).</span></div><div class='line' id='LC292'><span class="cm">	 */</span></div><div class='line' id='LC293'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relation</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">instance</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC294'>		<span class="k">this</span><span class="p">.</span><span class="nx">instance</span> <span class="o">=</span> <span class="nx">instance</span><span class="p">;</span></div><div class='line' id='LC295'>		<span class="c1">// Make sure &#39;options&#39; is sane, and fill with defaults from subclasses and this object&#39;s prototype</span></div><div class='line' id='LC296'>		<span class="nx">options</span> <span class="o">=</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">options</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span> <span class="p">)</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC297'>		<span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">reverseRelation</span> <span class="o">||</span> <span class="p">{},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">reverseRelation</span> <span class="p">);</span></div><div class='line' id='LC298'>		<span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">type</span> <span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">type</span> <span class="o">:</span></div><div class='line' id='LC299'>			<span class="nx">Backbone</span><span class="p">[</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">type</span> <span class="p">]</span> <span class="o">||</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">getObjectByName</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">type</span> <span class="p">);</span></div><div class='line' id='LC300'>		<span class="k">this</span><span class="p">.</span><span class="nx">model</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">model</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">constructor</span><span class="p">;</span></div><div class='line' id='LC301'>		<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">(</span> <span class="nx">options</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relation</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC302'><br/></div><div class='line' id='LC303'>		<span class="k">this</span><span class="p">.</span><span class="nx">key</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC304'>		<span class="k">this</span><span class="p">.</span><span class="nx">keySource</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">keySource</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC305'>		<span class="k">this</span><span class="p">.</span><span class="nx">keyDestination</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">keyDestination</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">keySource</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC306'><br/></div><div class='line' id='LC307'>		<span class="c1">// &#39;exports&#39; should be the global object where &#39;relatedModel&#39; can be found on if given as a string.</span></div><div class='line' id='LC308'>		<span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">;</span></div><div class='line' id='LC309'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC310'>			<span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">getObjectByName</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="p">);</span></div><div class='line' id='LC311'>		<span class="p">}</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'>		<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">checkPreconditions</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC315'>		<span class="p">}</span></div><div class='line' id='LC316'><br/></div><div class='line' id='LC317'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">instance</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC318'>			<span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">keySource</span> <span class="p">);</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>			<span class="c1">// Explicitly clear &#39;keySource&#39;, to prevent a leaky abstraction if &#39;keySource&#39; differs from &#39;key&#39;.</span></div><div class='line' id='LC321'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span> <span class="o">!==</span> <span class="k">this</span><span class="p">.</span><span class="nx">keySource</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC322'>				<span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">unset</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">keySource</span><span class="p">,</span> <span class="p">{</span> <span class="nx">silent</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC323'>			<span class="p">}</span></div><div class='line' id='LC324'><br/></div><div class='line' id='LC325'>			<span class="c1">// Add this Relation to instance._relations</span></div><div class='line' id='LC326'>			<span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">_relations</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC327'>		<span class="p">}</span></div><div class='line' id='LC328'><br/></div><div class='line' id='LC329'>		<span class="c1">// Add the reverse relation on &#39;relatedModel&#39; to the store&#39;s reverseRelations</span></div><div class='line' id='LC330'>		<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">isAutoRelation</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">type</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">key</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC331'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">addReverseRelation</span><span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">(</span> <span class="p">{</span></div><div class='line' id='LC332'>					<span class="nx">isAutoRelation</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC333'>					<span class="nx">model</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">,</span></div><div class='line' id='LC334'>					<span class="nx">relatedModel</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">,</span></div><div class='line' id='LC335'>					<span class="nx">reverseRelation</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="c1">// current relation is the &#39;reverseRelation&#39; for it&#39;s own reverseRelation</span></div><div class='line' id='LC336'>				<span class="p">},</span></div><div class='line' id='LC337'>				<span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span> <span class="c1">// Take further properties from this.reverseRelation (type, key, etc.)</span></div><div class='line' id='LC338'>			<span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC339'>		<span class="p">}</span></div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'>		<span class="nx">_</span><span class="p">.</span><span class="nx">bindAll</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="s1">&#39;_modelRemovedFromCollection&#39;</span><span class="p">,</span> <span class="s1">&#39;_relatedModelAdded&#39;</span><span class="p">,</span> <span class="s1">&#39;_relatedModelRemoved&#39;</span> <span class="p">);</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>		<span class="k">if</span><span class="p">(</span> <span class="nx">instance</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC344'>			<span class="k">this</span><span class="p">.</span><span class="nx">initialize</span><span class="p">();</span></div><div class='line' id='LC345'><br/></div><div class='line' id='LC346'>			<span class="c1">// When a model in the store is destroyed, check if it is &#39;this.instance&#39;.</span></div><div class='line' id='LC347'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">getCollection</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span> <span class="p">)</span></div><div class='line' id='LC348'>				<span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;relational:remove&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_modelRemovedFromCollection</span> <span class="p">);</span></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'>			<span class="c1">// When &#39;relatedModel&#39; are created or destroyed, check if it affects this relation.</span></div><div class='line' id='LC351'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">getCollection</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="p">)</span></div><div class='line' id='LC352'>				<span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;relational:add&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_relatedModelAdded</span> <span class="p">)</span></div><div class='line' id='LC353'>				<span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;relational:remove&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_relatedModelRemoved</span> <span class="p">);</span></div><div class='line' id='LC354'>		<span class="p">}</span></div><div class='line' id='LC355'>	<span class="p">};</span></div><div class='line' id='LC356'>	<span class="c1">// Fix inheritance :\</span></div><div class='line' id='LC357'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relation</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">extend</span><span class="p">;</span></div><div class='line' id='LC358'>	<span class="c1">// Set up all inheritable **Backbone.Relation** properties and methods.</span></div><div class='line' id='LC359'>	<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relation</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Events</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Semaphore</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC360'>		<span class="nx">options</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC361'>			<span class="nx">createModels</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC362'>			<span class="nx">includeInJSON</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC363'>			<span class="nx">isAutoRelation</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC364'>		<span class="p">},</span></div><div class='line' id='LC365'><br/></div><div class='line' id='LC366'>		<span class="nx">instance</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC367'>		<span class="nx">key</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC368'>		<span class="nx">keyContents</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC369'>		<span class="nx">relatedModel</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC370'>		<span class="nx">reverseRelation</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC371'>		<span class="nx">related</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC372'><br/></div><div class='line' id='LC373'>		<span class="nx">_relatedModelAdded</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">coll</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC374'>			<span class="c1">// Allow &#39;model&#39; to set up it&#39;s relations, before calling &#39;tryAddRelated&#39;</span></div><div class='line' id='LC375'>			<span class="c1">// (which can result in a call to &#39;addRelated&#39; on a relation of &#39;model&#39;)</span></div><div class='line' id='LC376'>			<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC377'>			<span class="nx">model</span><span class="p">.</span><span class="nx">queue</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC378'>				<span class="nx">dit</span><span class="p">.</span><span class="nx">tryAddRelated</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC379'>			<span class="p">});</span></div><div class='line' id='LC380'>		<span class="p">},</span></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>		<span class="nx">_relatedModelRemoved</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">coll</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC383'>			<span class="k">this</span><span class="p">.</span><span class="nx">removeRelated</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC384'>		<span class="p">},</span></div><div class='line' id='LC385'><br/></div><div class='line' id='LC386'>		<span class="nx">_modelRemovedFromCollection</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC387'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">model</span> <span class="o">===</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC388'>				<span class="k">this</span><span class="p">.</span><span class="nx">destroy</span><span class="p">();</span></div><div class='line' id='LC389'>			<span class="p">}</span></div><div class='line' id='LC390'>		<span class="p">},</span></div><div class='line' id='LC391'><br/></div><div class='line' id='LC392'>		<span class="cm">/**</span></div><div class='line' id='LC393'><span class="cm">		 * Check several pre-conditions.</span></div><div class='line' id='LC394'><span class="cm">		 * @return {Boolean} True if pre-conditions are satisfied, false if they&#39;re not.</span></div><div class='line' id='LC395'><span class="cm">		 */</span></div><div class='line' id='LC396'>		<span class="nx">checkPreconditions</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC397'>			<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span></div><div class='line' id='LC398'>				<span class="nx">k</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span></div><div class='line' id='LC399'>				<span class="nx">m</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">,</span></div><div class='line' id='LC400'>				<span class="nx">rm</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">,</span></div><div class='line' id='LC401'>				<span class="nx">warn</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">showWarnings</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">console</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">;</span></div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">m</span> <span class="o">||</span> <span class="o">!</span><span class="nx">k</span> <span class="o">||</span> <span class="o">!</span><span class="nx">rm</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC404'>				<span class="nx">warn</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span> <span class="s1">&#39;Relation=%o; no model, key or relatedModel (%o, %o, %o)&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">m</span><span class="p">,</span> <span class="nx">k</span><span class="p">,</span> <span class="nx">rm</span> <span class="p">);</span></div><div class='line' id='LC405'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC406'>			<span class="p">}</span></div><div class='line' id='LC407'>			<span class="c1">// Check if the type in &#39;relatedModel&#39; inherits from Backbone.RelationalModel</span></div><div class='line' id='LC408'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="p">(</span> <span class="nx">m</span><span class="p">.</span><span class="nx">prototype</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">RelationalModel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC409'>				<span class="nx">warn</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span> <span class="s1">&#39;Relation=%o; model does not inherit from Backbone.RelationalModel (%o)&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC410'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC411'>			<span class="p">}</span></div><div class='line' id='LC412'>			<span class="c1">// Check if the type in &#39;relatedModel&#39; inherits from Backbone.RelationalModel</span></div><div class='line' id='LC413'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="p">(</span> <span class="nx">rm</span><span class="p">.</span><span class="nx">prototype</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">RelationalModel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC414'>				<span class="nx">warn</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span> <span class="s1">&#39;Relation=%o; relatedModel does not inherit from Backbone.RelationalModel (%o)&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">rm</span> <span class="p">);</span></div><div class='line' id='LC415'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC416'>			<span class="p">}</span></div><div class='line' id='LC417'>			<span class="c1">// Check if this is not a HasMany, and the reverse relation is HasMany as well</span></div><div class='line' id='LC418'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">HasMany</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">HasMany</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC419'>				<span class="nx">warn</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span> <span class="s1">&#39;Relation=%o; relation is a HasMany, and the reverseRelation is HasMany as well.&#39;</span><span class="p">,</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC420'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC421'>			<span class="p">}</span></div><div class='line' id='LC422'><br/></div><div class='line' id='LC423'>			<span class="c1">// Check if we&#39;re not attempting to create a duplicate relationship</span></div><div class='line' id='LC424'>			<span class="k">if</span><span class="p">(</span> <span class="nx">i</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span><span class="p">.</span><span class="nx">_relations</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC425'>				<span class="kd">var</span> <span class="nx">exists</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span> <span class="nx">i</span><span class="p">.</span><span class="nx">_relations</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">rel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC426'>					<span class="kd">var</span> <span class="nx">hasReverseRelation</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">key</span> <span class="o">&amp;&amp;</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC427'>					<span class="k">return</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="o">===</span> <span class="nx">rm</span> <span class="o">&amp;&amp;</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">key</span> <span class="o">===</span> <span class="nx">k</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC428'>						<span class="p">(</span> <span class="o">!</span><span class="nx">hasReverseRelation</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">key</span> <span class="o">===</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">key</span> <span class="p">);</span></div><div class='line' id='LC429'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC430'><br/></div><div class='line' id='LC431'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">exists</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC432'>					<span class="nx">warn</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span> <span class="s1">&#39;Relation=%o between instance=%o.%s and relatedModel=%o.%s already exists&#39;</span><span class="p">,</span></div><div class='line' id='LC433'>						<span class="k">this</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">k</span><span class="p">,</span> <span class="nx">rm</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">key</span> <span class="p">);</span></div><div class='line' id='LC434'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC435'>				<span class="p">}</span></div><div class='line' id='LC436'>			<span class="p">}</span></div><div class='line' id='LC437'><br/></div><div class='line' id='LC438'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC439'>		<span class="p">},</span></div><div class='line' id='LC440'><br/></div><div class='line' id='LC441'>		<span class="cm">/**</span></div><div class='line' id='LC442'><span class="cm">		 * Set the related model(s) for this relation</span></div><div class='line' id='LC443'><span class="cm">		 * @param {Backbone.Mode|Backbone.Collection} related</span></div><div class='line' id='LC444'><span class="cm">		 * @param {Object} [options]</span></div><div class='line' id='LC445'><span class="cm">		 */</span></div><div class='line' id='LC446'>		<span class="nx">setRelated</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">related</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC447'>			<span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="o">=</span> <span class="nx">related</span><span class="p">;</span></div><div class='line' id='LC448'><br/></div><div class='line' id='LC449'>			<span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">acquire</span><span class="p">();</span></div><div class='line' id='LC450'>			<span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span> <span class="nx">related</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">(</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{},</span> <span class="p">{</span> <span class="nx">silent</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC451'>			<span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">release</span><span class="p">();</span></div><div class='line' id='LC452'>		<span class="p">},</span></div><div class='line' id='LC453'><br/></div><div class='line' id='LC454'>		<span class="nx">createModel</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC455'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">createModels</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC456'>				<span class="k">return</span> <span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">(</span> <span class="nx">item</span> <span class="p">);</span></div><div class='line' id='LC457'>			<span class="p">}</span></div><div class='line' id='LC458'>		<span class="p">},</span></div><div class='line' id='LC459'><br/></div><div class='line' id='LC460'>		<span class="cm">/**</span></div><div class='line' id='LC461'><span class="cm">		 * Determine if a relation (on a different RelationalModel) is the reverse</span></div><div class='line' id='LC462'><span class="cm">		 * relation of the current one.</span></div><div class='line' id='LC463'><span class="cm">		 * @param {Backbone.Relation} relation</span></div><div class='line' id='LC464'><span class="cm">		 * @return {Boolean}</span></div><div class='line' id='LC465'><span class="cm">		 */</span></div><div class='line' id='LC466'>		<span class="nx">_isReverseRelation</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC467'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">relation</span><span class="p">.</span><span class="nx">instance</span> <span class="k">instanceof</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">key</span> <span class="o">===</span> <span class="nx">relation</span><span class="p">.</span><span class="nx">key</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC468'>					<span class="k">this</span><span class="p">.</span><span class="nx">key</span> <span class="o">===</span> <span class="nx">relation</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">key</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC469'>				<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC470'>			<span class="p">}</span></div><div class='line' id='LC471'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC472'>		<span class="p">},</span></div><div class='line' id='LC473'><br/></div><div class='line' id='LC474'>		<span class="cm">/**</span></div><div class='line' id='LC475'><span class="cm">		 * Get the reverse relations (pointing back to &#39;this.key&#39; on &#39;this.instance&#39;) for the currently related model(s).</span></div><div class='line' id='LC476'><span class="cm">		 * @param {Backbone.RelationalModel} [model] Get the reverse relations for a specific model.</span></div><div class='line' id='LC477'><span class="cm">		 *    If not specified, &#39;this.related&#39; is used.</span></div><div class='line' id='LC478'><span class="cm">		 * @return {Backbone.Relation[]}</span></div><div class='line' id='LC479'><span class="cm">		 */</span></div><div class='line' id='LC480'>		<span class="nx">getReverseRelations</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC481'>			<span class="kd">var</span> <span class="nx">reverseRelations</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC482'>			<span class="c1">// Iterate over &#39;model&#39;, &#39;this.related.models&#39; (if this.related is a Backbone.Collection), or wrap &#39;this.related&#39; in an array.</span></div><div class='line' id='LC483'>			<span class="kd">var</span> <span class="nx">models</span> <span class="o">=</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="o">?</span> <span class="p">[</span> <span class="nx">model</span> <span class="p">]</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">models</span> <span class="o">||</span> <span class="p">[</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC484'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">models</span> <span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">related</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC485'>				<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">related</span><span class="p">.</span><span class="nx">getRelations</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC486'>					<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_isReverseRelation</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC487'>						<span class="nx">reverseRelations</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">);</span></div><div class='line' id='LC488'>					<span class="p">}</span></div><div class='line' id='LC489'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC490'>			<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC491'><br/></div><div class='line' id='LC492'>			<span class="k">return</span> <span class="nx">reverseRelations</span><span class="p">;</span></div><div class='line' id='LC493'>		<span class="p">},</span></div><div class='line' id='LC494'><br/></div><div class='line' id='LC495'>		<span class="cm">/**</span></div><div class='line' id='LC496'><span class="cm">		 * Rename options.silent to options.silentChange, so events propagate properly.</span></div><div class='line' id='LC497'><span class="cm">		 * (for example in HasMany, from &#39;addRelated&#39;-&gt;&#39;handleAddition&#39;)</span></div><div class='line' id='LC498'><span class="cm">		 * @param {Object} [options]</span></div><div class='line' id='LC499'><span class="cm">		 * @return {Object}</span></div><div class='line' id='LC500'><span class="cm">		 */</span></div><div class='line' id='LC501'>		<span class="nx">sanitizeOptions</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC502'>			<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC503'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">silent</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC504'>				<span class="nx">options</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="p">{},</span> <span class="nx">options</span><span class="p">,</span> <span class="p">{</span> <span class="nx">silentChange</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC505'>				<span class="k">delete</span> <span class="nx">options</span><span class="p">.</span><span class="nx">silent</span><span class="p">;</span></div><div class='line' id='LC506'>			<span class="p">}</span></div><div class='line' id='LC507'>			<span class="k">return</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC508'>		<span class="p">},</span></div><div class='line' id='LC509'><br/></div><div class='line' id='LC510'>		<span class="cm">/**</span></div><div class='line' id='LC511'><span class="cm">		 * Rename options.silentChange to options.silent, so events are silenced as intended in Backbone&#39;s</span></div><div class='line' id='LC512'><span class="cm">		 * original functions.</span></div><div class='line' id='LC513'><span class="cm">		 * @param {Object} [options]</span></div><div class='line' id='LC514'><span class="cm">		 * @return {Object}</span></div><div class='line' id='LC515'><span class="cm">		 */</span></div><div class='line' id='LC516'>		<span class="nx">unsanitizeOptions</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC517'>			<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC518'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">silentChange</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC519'>				<span class="nx">options</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="p">{},</span> <span class="nx">options</span><span class="p">,</span> <span class="p">{</span> <span class="nx">silent</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC520'>				<span class="k">delete</span> <span class="nx">options</span><span class="p">.</span><span class="nx">silentChange</span><span class="p">;</span></div><div class='line' id='LC521'>			<span class="p">}</span></div><div class='line' id='LC522'>			<span class="k">return</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC523'>		<span class="p">},</span></div><div class='line' id='LC524'><br/></div><div class='line' id='LC525'>		<span class="c1">// Cleanup. Get reverse relation, call removeRelated on each.</span></div><div class='line' id='LC526'>		<span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC527'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">getCollection</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span> <span class="p">)</span></div><div class='line' id='LC528'>				<span class="p">.</span><span class="nx">unbind</span><span class="p">(</span> <span class="s1">&#39;relational:remove&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_modelRemovedFromCollection</span> <span class="p">);</span></div><div class='line' id='LC529'><br/></div><div class='line' id='LC530'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">getCollection</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="p">)</span></div><div class='line' id='LC531'>				<span class="p">.</span><span class="nx">unbind</span><span class="p">(</span> <span class="s1">&#39;relational:add&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_relatedModelAdded</span> <span class="p">)</span></div><div class='line' id='LC532'>				<span class="p">.</span><span class="nx">unbind</span><span class="p">(</span> <span class="s1">&#39;relational:remove&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_relatedModelRemoved</span> <span class="p">);</span></div><div class='line' id='LC533'><br/></div><div class='line' id='LC534'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">getReverseRelations</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC535'>					<span class="nx">relation</span><span class="p">.</span><span class="nx">removeRelated</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span> <span class="p">);</span></div><div class='line' id='LC536'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC537'>		<span class="p">}</span></div><div class='line' id='LC538'>	<span class="p">});</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">HasOne</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relation</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC541'>		<span class="nx">options</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC542'>			<span class="nx">reverseRelation</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;HasMany&#39;</span> <span class="p">}</span></div><div class='line' id='LC543'>		<span class="p">},</span></div><div class='line' id='LC544'><br/></div><div class='line' id='LC545'>		<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC546'>			<span class="nx">_</span><span class="p">.</span><span class="nx">bindAll</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="s1">&#39;onChange&#39;</span> <span class="p">);</span></div><div class='line' id='LC547'><br/></div><div class='line' id='LC548'>			<span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;relational:change:&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onChange</span> <span class="p">);</span></div><div class='line' id='LC549'><br/></div><div class='line' id='LC550'>			<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">findRelated</span><span class="p">(</span> <span class="p">{</span> <span class="nx">silent</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC551'>			<span class="k">this</span><span class="p">.</span><span class="nx">setRelated</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC552'><br/></div><div class='line' id='LC553'>			<span class="c1">// Notify new &#39;related&#39; object of the new relation.</span></div><div class='line' id='LC554'>			<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC555'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">getReverseRelations</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC556'>				<span class="nx">relation</span><span class="p">.</span><span class="nx">addRelated</span><span class="p">(</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">instance</span> <span class="p">);</span></div><div class='line' id='LC557'>			<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC558'>		<span class="p">},</span></div><div class='line' id='LC559'><br/></div><div class='line' id='LC560'>		<span class="nx">findRelated</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC561'>			<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span><span class="p">;</span></div><div class='line' id='LC562'>			<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC563'><br/></div><div class='line' id='LC564'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">item</span> <span class="k">instanceof</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC565'>				<span class="nx">model</span> <span class="o">=</span> <span class="nx">item</span><span class="p">;</span></div><div class='line' id='LC566'>			<span class="p">}</span></div><div class='line' id='LC567'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC568'>				<span class="c1">// Try to find an instance of the appropriate &#39;relatedModel&#39; in the store, or create it</span></div><div class='line' id='LC569'>				<span class="nx">model</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">,</span> <span class="nx">item</span> <span class="p">);</span></div><div class='line' id='LC570'><br/></div><div class='line' id='LC571'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">model</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC572'>					<span class="nx">model</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">item</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC573'>				<span class="p">}</span></div><div class='line' id='LC574'>				<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC575'>					<span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">createModel</span><span class="p">(</span> <span class="nx">item</span> <span class="p">);</span></div><div class='line' id='LC576'>				<span class="p">}</span></div><div class='line' id='LC577'>			<span class="p">}</span></div><div class='line' id='LC578'><br/></div><div class='line' id='LC579'>			<span class="k">return</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC580'>		<span class="p">},</span></div><div class='line' id='LC581'><br/></div><div class='line' id='LC582'>		<span class="cm">/**</span></div><div class='line' id='LC583'><span class="cm">		 * If the key is changed, notify old &amp; new reverse relations and initialize the new relation</span></div><div class='line' id='LC584'><span class="cm">		 */</span></div><div class='line' id='LC585'>		<span class="nx">onChange</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">attr</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC586'>			<span class="c1">// Don&#39;t accept recursive calls to onChange (like onChange-&gt;findRelated-&gt;createModel-&gt;initializeRelations-&gt;addRelated-&gt;onChange)</span></div><div class='line' id='LC587'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">isLocked</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC588'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC589'>			<span class="p">}</span></div><div class='line' id='LC590'>			<span class="k">this</span><span class="p">.</span><span class="nx">acquire</span><span class="p">();</span></div><div class='line' id='LC591'>			<span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sanitizeOptions</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC592'><br/></div><div class='line' id='LC593'>			<span class="c1">// &#39;options._related&#39; is set by &#39;addRelated&#39;/&#39;removeRelated&#39;. If it is set, the change</span></div><div class='line' id='LC594'>			<span class="c1">// is the result of a call from a relation. If it&#39;s not, the change is the result of </span></div><div class='line' id='LC595'>			<span class="c1">// a &#39;set&#39; call on this.instance.</span></div><div class='line' id='LC596'>			<span class="kd">var</span> <span class="nx">changed</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">_related</span> <span class="p">);</span></div><div class='line' id='LC597'>			<span class="kd">var</span> <span class="nx">oldRelated</span> <span class="o">=</span> <span class="nx">changed</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">_related</span><span class="p">;</span></div><div class='line' id='LC598'><br/></div><div class='line' id='LC599'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">changed</span> <span class="p">)</span> <span class="p">{</span>	</div><div class='line' id='LC600'>				<span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="o">=</span> <span class="nx">attr</span><span class="p">;</span></div><div class='line' id='LC601'><br/></div><div class='line' id='LC602'>				<span class="c1">// Set new &#39;related&#39;</span></div><div class='line' id='LC603'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">attr</span> <span class="k">instanceof</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC604'>					<span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="o">=</span> <span class="nx">attr</span><span class="p">;</span></div><div class='line' id='LC605'>				<span class="p">}</span></div><div class='line' id='LC606'>				<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">attr</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC607'>					<span class="kd">var</span> <span class="nx">related</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">findRelated</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC608'>					<span class="k">this</span><span class="p">.</span><span class="nx">setRelated</span><span class="p">(</span> <span class="nx">related</span> <span class="p">);</span></div><div class='line' id='LC609'>				<span class="p">}</span></div><div class='line' id='LC610'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC611'>					<span class="k">this</span><span class="p">.</span><span class="nx">setRelated</span><span class="p">(</span> <span class="kc">null</span> <span class="p">);</span></div><div class='line' id='LC612'>				<span class="p">}</span></div><div class='line' id='LC613'>			<span class="p">}</span></div><div class='line' id='LC614'><br/></div><div class='line' id='LC615'>			<span class="c1">// Notify old &#39;related&#39; object of the terminated relation</span></div><div class='line' id='LC616'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">oldRelated</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="o">!==</span> <span class="nx">oldRelated</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC617'>				<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">getReverseRelations</span><span class="p">(</span> <span class="nx">oldRelated</span> <span class="p">),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC618'>						<span class="nx">relation</span><span class="p">.</span><span class="nx">removeRelated</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC619'>					<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC620'>			<span class="p">}</span></div><div class='line' id='LC621'><br/></div><div class='line' id='LC622'>			<span class="c1">// Notify new &#39;related&#39; object of the new relation. Note we do re-apply even if this.related is oldRelated;</span></div><div class='line' id='LC623'>			<span class="c1">// that can be necessary for bi-directional relations if &#39;this.instance&#39; was created after &#39;this.related&#39;.</span></div><div class='line' id='LC624'>			<span class="c1">// In that case, &#39;this.instance&#39; will already know &#39;this.related&#39;, but the reverse might not exist yet.</span></div><div class='line' id='LC625'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">getReverseRelations</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC626'>					<span class="nx">relation</span><span class="p">.</span><span class="nx">addRelated</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC627'>				<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC628'><br/></div><div class='line' id='LC629'>			<span class="c1">// Fire the &#39;update:&lt;key&gt;&#39; event if &#39;related&#39; was updated</span></div><div class='line' id='LC630'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">silentChange</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="o">!==</span> <span class="nx">oldRelated</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC631'>				<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC632'>				<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC633'>					<span class="nx">dit</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="s1">&#39;update:&#39;</span> <span class="o">+</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">related</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC634'>				<span class="p">});</span></div><div class='line' id='LC635'>			<span class="p">}</span></div><div class='line' id='LC636'>			<span class="k">this</span><span class="p">.</span><span class="nx">release</span><span class="p">();</span></div><div class='line' id='LC637'>		<span class="p">},</span></div><div class='line' id='LC638'><br/></div><div class='line' id='LC639'>		<span class="cm">/**</span></div><div class='line' id='LC640'><span class="cm">		 * If a new &#39;this.relatedModel&#39; appears in the &#39;store&#39;, try to match it to the last set &#39;keyContents&#39;</span></div><div class='line' id='LC641'><span class="cm">		 */</span></div><div class='line' id='LC642'>		<span class="nx">tryAddRelated</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC643'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC644'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC645'>			<span class="p">}</span></div><div class='line' id='LC646'>			<span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sanitizeOptions</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC647'><br/></div><div class='line' id='LC648'>			<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span><span class="p">;</span></div><div class='line' id='LC649'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC650'>				<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">resolveIdForItem</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">,</span> <span class="nx">item</span> <span class="p">);</span></div><div class='line' id='LC651'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">===</span> <span class="nx">id</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC652'>					<span class="k">this</span><span class="p">.</span><span class="nx">addRelated</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC653'>				<span class="p">}</span></div><div class='line' id='LC654'>			<span class="p">}</span></div><div class='line' id='LC655'>		<span class="p">},</span></div><div class='line' id='LC656'><br/></div><div class='line' id='LC657'>		<span class="nx">addRelated</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC658'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">model</span> <span class="o">!==</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC659'>				<span class="kd">var</span> <span class="nx">oldRelated</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC660'>				<span class="k">this</span><span class="p">.</span><span class="nx">setRelated</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC661'>				<span class="k">this</span><span class="p">.</span><span class="nx">onChange</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="p">{</span> <span class="nx">_related</span><span class="o">:</span> <span class="nx">oldRelated</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC662'>			<span class="p">}</span></div><div class='line' id='LC663'>		<span class="p">},</span></div><div class='line' id='LC664'><br/></div><div class='line' id='LC665'>		<span class="nx">removeRelated</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC666'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC667'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC668'>			<span class="p">}</span></div><div class='line' id='LC669'><br/></div><div class='line' id='LC670'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">model</span> <span class="o">===</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC671'>				<span class="kd">var</span> <span class="nx">oldRelated</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC672'>				<span class="k">this</span><span class="p">.</span><span class="nx">setRelated</span><span class="p">(</span> <span class="kc">null</span> <span class="p">);</span></div><div class='line' id='LC673'>				<span class="k">this</span><span class="p">.</span><span class="nx">onChange</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="p">{</span> <span class="nx">_related</span><span class="o">:</span> <span class="nx">oldRelated</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC674'>			<span class="p">}</span></div><div class='line' id='LC675'>		<span class="p">}</span></div><div class='line' id='LC676'>	<span class="p">});</span></div><div class='line' id='LC677'><br/></div><div class='line' id='LC678'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">HasMany</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relation</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC679'>		<span class="nx">collectionType</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC680'><br/></div><div class='line' id='LC681'>		<span class="nx">options</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC682'>			<span class="nx">reverseRelation</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;HasOne&#39;</span> <span class="p">},</span></div><div class='line' id='LC683'>			<span class="nx">collectionType</span><span class="o">:</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">,</span></div><div class='line' id='LC684'>			<span class="nx">collectionKey</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC685'>			<span class="nx">collectionOptions</span><span class="o">:</span> <span class="p">{}</span></div><div class='line' id='LC686'>		<span class="p">},</span></div><div class='line' id='LC687'><br/></div><div class='line' id='LC688'>		<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC689'>			<span class="nx">_</span><span class="p">.</span><span class="nx">bindAll</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="s1">&#39;onChange&#39;</span><span class="p">,</span> <span class="s1">&#39;handleAddition&#39;</span><span class="p">,</span> <span class="s1">&#39;handleRemoval&#39;</span><span class="p">,</span> <span class="s1">&#39;handleReset&#39;</span> <span class="p">);</span></div><div class='line' id='LC690'>			<span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;relational:change:&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onChange</span> <span class="p">);</span></div><div class='line' id='LC691'><br/></div><div class='line' id='LC692'>			<span class="c1">// Handle a custom &#39;collectionType&#39;</span></div><div class='line' id='LC693'>			<span class="k">this</span><span class="p">.</span><span class="nx">collectionType</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">collectionType</span><span class="p">;</span></div><div class='line' id='LC694'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">collectionType</span> <span class="p">).</span><span class="nx">isString</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC695'>				<span class="k">this</span><span class="p">.</span><span class="nx">collectionType</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">getObjectByName</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">collectionType</span> <span class="p">);</span></div><div class='line' id='LC696'>			<span class="p">}</span></div><div class='line' id='LC697'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">collectionType</span><span class="p">.</span><span class="nx">prototype</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="p">){</span></div><div class='line' id='LC698'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span> <span class="s1">&#39;collectionType must inherit from Backbone.Collection&#39;</span> <span class="p">);</span></div><div class='line' id='LC699'>			<span class="p">}</span></div><div class='line' id='LC700'><br/></div><div class='line' id='LC701'>			<span class="c1">// Handle cases where a model/relation is created with a collection passed straight into &#39;attributes&#39;</span></div><div class='line' id='LC702'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC703'>				<span class="k">this</span><span class="p">.</span><span class="nx">setRelated</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_prepareCollection</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC704'>			<span class="p">}</span></div><div class='line' id='LC705'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC706'>				<span class="k">this</span><span class="p">.</span><span class="nx">setRelated</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_prepareCollection</span><span class="p">()</span> <span class="p">);</span></div><div class='line' id='LC707'>			<span class="p">}</span></div><div class='line' id='LC708'><br/></div><div class='line' id='LC709'>			<span class="k">this</span><span class="p">.</span><span class="nx">findRelated</span><span class="p">(</span> <span class="p">{</span> <span class="nx">silent</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC710'>		<span class="p">},</span></div><div class='line' id='LC711'><br/></div><div class='line' id='LC712'>		<span class="nx">_getCollectionOptions</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC713'>			<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">collectionOptions</span> <span class="p">)</span> <span class="o">?</span></div><div class='line' id='LC714'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">collectionOptions</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC715'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">collectionOptions</span><span class="p">;</span></div><div class='line' id='LC716'>		<span class="p">},</span></div><div class='line' id='LC717'><br/></div><div class='line' id='LC718'>		<span class="cm">/**</span></div><div class='line' id='LC719'><span class="cm">		 * Bind events and setup collectionKeys for a collection that is to be used as the backing store for a HasMany.</span></div><div class='line' id='LC720'><span class="cm">		 * If no &#39;collection&#39; is supplied, a new collection will be created of the specified &#39;collectionType&#39; option.</span></div><div class='line' id='LC721'><span class="cm">		 * @param {Backbone.Collection} [collection]</span></div><div class='line' id='LC722'><span class="cm">		 */</span></div><div class='line' id='LC723'>		<span class="nx">_prepareCollection</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">collection</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC724'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC725'>				<span class="k">this</span><span class="p">.</span><span class="nx">related</span></div><div class='line' id='LC726'>					<span class="p">.</span><span class="nx">unbind</span><span class="p">(</span> <span class="s1">&#39;relational:add&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">handleAddition</span> <span class="p">)</span></div><div class='line' id='LC727'>					<span class="p">.</span><span class="nx">unbind</span><span class="p">(</span> <span class="s1">&#39;relational:remove&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">handleRemoval</span> <span class="p">)</span></div><div class='line' id='LC728'>					<span class="p">.</span><span class="nx">unbind</span><span class="p">(</span> <span class="s1">&#39;relational:reset&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">handleReset</span> <span class="p">)</span></div><div class='line' id='LC729'>			<span class="p">}</span></div><div class='line' id='LC730'><br/></div><div class='line' id='LC731'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">collection</span> <span class="o">||</span> <span class="o">!</span><span class="p">(</span> <span class="nx">collection</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC732'>				<span class="nx">collection</span> <span class="o">=</span> <span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">collectionType</span><span class="p">(</span> <span class="p">[],</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getCollectionOptions</span><span class="p">()</span> <span class="p">);</span></div><div class='line' id='LC733'>			<span class="p">}</span></div><div class='line' id='LC734'><br/></div><div class='line' id='LC735'>			<span class="nx">collection</span><span class="p">.</span><span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">;</span></div><div class='line' id='LC736'><br/></div><div class='line' id='LC737'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">collectionKey</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC738'>				<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">collectionKey</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">reverseRelation</span><span class="p">.</span><span class="nx">key</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">collectionKey</span><span class="p">;</span></div><div class='line' id='LC739'><br/></div><div class='line' id='LC740'>				<span class="k">if</span> <span class="p">(</span><span class="nx">collection</span><span class="p">[</span> <span class="nx">key</span> <span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">collection</span><span class="p">[</span> <span class="nx">key</span> <span class="p">]</span> <span class="o">!==</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC741'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">showWarnings</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">console</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC742'>						<span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span> <span class="s1">&#39;Relation=%o; collectionKey=%s already exists on collection=%o&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">collectionKey</span> <span class="p">);</span></div><div class='line' id='LC743'>					<span class="p">}</span></div><div class='line' id='LC744'>				<span class="p">}</span></div><div class='line' id='LC745'>				<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC746'>					<span class="nx">collection</span><span class="p">[</span> <span class="nx">key</span> <span class="p">]</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">;</span></div><div class='line' id='LC747'>				<span class="p">}</span></div><div class='line' id='LC748'>			<span class="p">}</span></div><div class='line' id='LC749'><br/></div><div class='line' id='LC750'>			<span class="nx">collection</span></div><div class='line' id='LC751'>				<span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;relational:add&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">handleAddition</span> <span class="p">)</span></div><div class='line' id='LC752'>				<span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;relational:remove&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">handleRemoval</span> <span class="p">)</span></div><div class='line' id='LC753'>				<span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;relational:reset&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">handleReset</span> <span class="p">);</span></div><div class='line' id='LC754'><br/></div><div class='line' id='LC755'>			<span class="k">return</span> <span class="nx">collection</span><span class="p">;</span></div><div class='line' id='LC756'>		<span class="p">},</span></div><div class='line' id='LC757'><br/></div><div class='line' id='LC758'>		<span class="nx">findRelated</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC759'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC760'>				<span class="kd">var</span> <span class="nx">models</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC761'><br/></div><div class='line' id='LC762'>				<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC763'>					<span class="nx">models</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span><span class="p">.</span><span class="nx">models</span><span class="p">;</span></div><div class='line' id='LC764'>				<span class="p">}</span></div><div class='line' id='LC765'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC766'>					<span class="c1">// Handle cases the an API/user supplies just an Object/id instead of an Array</span></div><div class='line' id='LC767'>					<span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="o">:</span> <span class="p">[</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="p">];</span></div><div class='line' id='LC768'><br/></div><div class='line' id='LC769'>					<span class="c1">// Try to find instances of the appropriate &#39;relatedModel&#39; in the store</span></div><div class='line' id='LC770'>					<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC771'>						<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">,</span> <span class="nx">item</span> <span class="p">);</span></div><div class='line' id='LC772'><br/></div><div class='line' id='LC773'>						<span class="k">if</span> <span class="p">(</span> <span class="nx">model</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC774'>							<span class="nx">model</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">item</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC775'>						<span class="p">}</span></div><div class='line' id='LC776'>						<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC777'>							<span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">createModel</span><span class="p">(</span> <span class="nx">item</span> <span class="p">);</span></div><div class='line' id='LC778'>						<span class="p">}</span></div><div class='line' id='LC779'><br/></div><div class='line' id='LC780'>						<span class="k">if</span> <span class="p">(</span> <span class="nx">model</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">getByCid</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC781'>							<span class="nx">models</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC782'>						<span class="p">}</span></div><div class='line' id='LC783'>					<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC784'>				<span class="p">}</span></div><div class='line' id='LC785'><br/></div><div class='line' id='LC786'>				<span class="c1">// Add all found &#39;models&#39; in on go, so &#39;add&#39; will only be called once (and thus &#39;sort&#39;, etc.)</span></div><div class='line' id='LC787'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">models</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC788'>					<span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">unsanitizeOptions</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC789'>					<span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="nx">models</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC790'>				<span class="p">}</span></div><div class='line' id='LC791'>			<span class="p">}</span></div><div class='line' id='LC792'>		<span class="p">},</span></div><div class='line' id='LC793'><br/></div><div class='line' id='LC794'>		<span class="cm">/**</span></div><div class='line' id='LC795'><span class="cm">		 * If the key is changed, notify old &amp; new reverse relations and initialize the new relation</span></div><div class='line' id='LC796'><span class="cm">		 */</span></div><div class='line' id='LC797'>		<span class="nx">onChange</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">attr</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC798'>			<span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sanitizeOptions</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC799'>			<span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span> <span class="o">=</span> <span class="nx">attr</span><span class="p">;</span></div><div class='line' id='LC800'><br/></div><div class='line' id='LC801'>			<span class="c1">// Notify old &#39;related&#39; object of the terminated relation</span></div><div class='line' id='LC802'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">getReverseRelations</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC803'>					<span class="nx">relation</span><span class="p">.</span><span class="nx">removeRelated</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC804'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC805'><br/></div><div class='line' id='LC806'>			<span class="c1">// Replace &#39;this.related&#39; by &#39;attr&#39; if it is a Backbone.Collection</span></div><div class='line' id='LC807'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">attr</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC808'>				<span class="k">this</span><span class="p">.</span><span class="nx">_prepareCollection</span><span class="p">(</span> <span class="nx">attr</span> <span class="p">);</span></div><div class='line' id='LC809'>				<span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="o">=</span> <span class="nx">attr</span><span class="p">;</span></div><div class='line' id='LC810'>			<span class="p">}</span></div><div class='line' id='LC811'>			<span class="c1">// Otherwise, &#39;attr&#39; should be an array of related object ids.</span></div><div class='line' id='LC812'>			<span class="c1">// Re-use the current &#39;this.related&#39; if it is a Backbone.Collection, and remove any current entries.</span></div><div class='line' id='LC813'>			<span class="c1">// Otherwise, create a new collection.</span></div><div class='line' id='LC814'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC815'>				<span class="kd">var</span> <span class="nx">coll</span><span class="p">;</span></div><div class='line' id='LC816'><br/></div><div class='line' id='LC817'>				<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC818'>					<span class="nx">coll</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">;</span></div><div class='line' id='LC819'>					<span class="nx">coll</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span> <span class="nx">coll</span><span class="p">.</span><span class="nx">models</span> <span class="p">);</span></div><div class='line' id='LC820'>				<span class="p">}</span></div><div class='line' id='LC821'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC822'>					<span class="nx">coll</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_prepareCollection</span><span class="p">();</span></div><div class='line' id='LC823'>				<span class="p">}</span></div><div class='line' id='LC824'><br/></div><div class='line' id='LC825'>				<span class="k">this</span><span class="p">.</span><span class="nx">setRelated</span><span class="p">(</span> <span class="nx">coll</span> <span class="p">);</span></div><div class='line' id='LC826'>				<span class="k">this</span><span class="p">.</span><span class="nx">findRelated</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC827'>			<span class="p">}</span></div><div class='line' id='LC828'><br/></div><div class='line' id='LC829'>			<span class="c1">// Notify new &#39;related&#39; object of the new relation</span></div><div class='line' id='LC830'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">getReverseRelations</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC831'>					<span class="nx">relation</span><span class="p">.</span><span class="nx">addRelated</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC832'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC833'><br/></div><div class='line' id='LC834'>			<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC835'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC836'>				<span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">silentChange</span> <span class="o">&amp;&amp;</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="s1">&#39;update:&#39;</span> <span class="o">+</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">related</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC837'>			<span class="p">});</span></div><div class='line' id='LC838'>		<span class="p">},</span></div><div class='line' id='LC839'><br/></div><div class='line' id='LC840'>		<span class="nx">tryAddRelated</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC841'>			<span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sanitizeOptions</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC842'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">getByCid</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC843'>				<span class="c1">// Check if this new model was specified in &#39;this.keyContents&#39;</span></div><div class='line' id='LC844'>				<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">keyContents</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC845'>					<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">resolveIdForItem</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">,</span> <span class="nx">item</span> <span class="p">);</span></div><div class='line' id='LC846'>					<span class="k">return</span> <span class="nx">id</span> <span class="o">&amp;&amp;</span> <span class="nx">id</span> <span class="o">===</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC847'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC848'><br/></div><div class='line' id='LC849'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC850'>					<span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC851'>				<span class="p">}</span></div><div class='line' id='LC852'>			<span class="p">}</span></div><div class='line' id='LC853'>		<span class="p">},</span></div><div class='line' id='LC854'><br/></div><div class='line' id='LC855'>		<span class="cm">/**</span></div><div class='line' id='LC856'><span class="cm">		 * When a model is added to a &#39;HasMany&#39;, trigger &#39;add&#39; on &#39;this.instance&#39; and notify reverse relations.</span></div><div class='line' id='LC857'><span class="cm">		 * (should be &#39;HasOne&#39;, must set &#39;this.instance&#39; as their related).</span></div><div class='line' id='LC858'><span class="cm">		 */</span></div><div class='line' id='LC859'>		<span class="nx">handleAddition</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">coll</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC860'>			<span class="c1">//console.debug(&#39;handleAddition called; args=%o&#39;, arguments);</span></div><div class='line' id='LC861'>			<span class="c1">// Make sure the model is in fact a valid model before continuing.</span></div><div class='line' id='LC862'>			<span class="c1">// (it can be invalid as a result of failing validation in Backbone.Collection._prepareModel)</span></div><div class='line' id='LC863'>			<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="p">(</span> <span class="nx">model</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC864'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC865'>			<span class="p">}</span></div><div class='line' id='LC866'><br/></div><div class='line' id='LC867'>			<span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sanitizeOptions</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC868'><br/></div><div class='line' id='LC869'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">getReverseRelations</span><span class="p">(</span> <span class="nx">model</span> <span class="p">),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC870'>					<span class="nx">relation</span><span class="p">.</span><span class="nx">addRelated</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC871'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC872'><br/></div><div class='line' id='LC873'>			<span class="c1">// Only trigger &#39;add&#39; once the newly added model is initialized (so, has it&#39;s relations set up)</span></div><div class='line' id='LC874'>			<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC875'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC876'>				<span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">silentChange</span> <span class="o">&amp;&amp;</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="s1">&#39;add:&#39;</span> <span class="o">+</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">related</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC877'>			<span class="p">});</span></div><div class='line' id='LC878'>		<span class="p">},</span></div><div class='line' id='LC879'><br/></div><div class='line' id='LC880'>		<span class="cm">/**</span></div><div class='line' id='LC881'><span class="cm">		 * When a model is removed from a &#39;HasMany&#39;, trigger &#39;remove&#39; on &#39;this.instance&#39; and notify reverse relations.</span></div><div class='line' id='LC882'><span class="cm">		 * (should be &#39;HasOne&#39;, which should be nullified)</span></div><div class='line' id='LC883'><span class="cm">		 */</span></div><div class='line' id='LC884'>		<span class="nx">handleRemoval</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">coll</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC885'>			<span class="c1">//console.debug(&#39;handleRemoval called; args=%o&#39;, arguments);</span></div><div class='line' id='LC886'>			<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="p">(</span> <span class="nx">model</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC887'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC888'>			<span class="p">}</span></div><div class='line' id='LC889'><br/></div><div class='line' id='LC890'>			<span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sanitizeOptions</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC891'><br/></div><div class='line' id='LC892'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">getReverseRelations</span><span class="p">(</span> <span class="nx">model</span> <span class="p">),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">relation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC893'>					<span class="nx">relation</span><span class="p">.</span><span class="nx">removeRelated</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">instance</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC894'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC895'><br/></div><div class='line' id='LC896'>			<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC897'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC898'>				<span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">silentChange</span> <span class="o">&amp;&amp;</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="s1">&#39;remove:&#39;</span> <span class="o">+</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">related</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC899'>			<span class="p">});</span></div><div class='line' id='LC900'>		<span class="p">},</span></div><div class='line' id='LC901'><br/></div><div class='line' id='LC902'>		<span class="nx">handleReset</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">coll</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC903'>			<span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sanitizeOptions</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC904'><br/></div><div class='line' id='LC905'>			<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC906'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC907'>				<span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">silentChange</span> <span class="o">&amp;&amp;</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">instance</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="s1">&#39;reset:&#39;</span> <span class="o">+</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">related</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC908'>			<span class="p">});</span></div><div class='line' id='LC909'>		<span class="p">},</span></div><div class='line' id='LC910'><br/></div><div class='line' id='LC911'>		<span class="nx">addRelated</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC912'>			<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC913'>			<span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">unsanitizeOptions</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC914'>			<span class="nx">model</span><span class="p">.</span><span class="nx">queue</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="c1">// Queued to avoid errors for adding &#39;model&#39; to the &#39;this.related&#39; set twice</span></div><div class='line' id='LC915'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">dit</span><span class="p">.</span><span class="nx">related</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">dit</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">getByCid</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">dit</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC916'>					<span class="nx">dit</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC917'>				<span class="p">}</span></div><div class='line' id='LC918'>			<span class="p">});</span></div><div class='line' id='LC919'>		<span class="p">},</span></div><div class='line' id='LC920'><br/></div><div class='line' id='LC921'>		<span class="nx">removeRelated</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC922'>			<span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">unsanitizeOptions</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC923'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">getByCid</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC924'>				<span class="k">this</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC925'>			<span class="p">}</span></div><div class='line' id='LC926'>		<span class="p">}</span></div><div class='line' id='LC927'>	<span class="p">});</span></div><div class='line' id='LC928'><br/></div><div class='line' id='LC929'>	<span class="cm">/**</span></div><div class='line' id='LC930'><span class="cm">	 * A type of Backbone.Model that also maintains relations to other models and collections.</span></div><div class='line' id='LC931'><span class="cm">	 * New events when compared to the original:</span></div><div class='line' id='LC932'><span class="cm">	 *  - &#39;add:&lt;key&gt;&#39; (model, related collection, options)</span></div><div class='line' id='LC933'><span class="cm">	 *  - &#39;remove:&lt;key&gt;&#39; (model, related collection, options)</span></div><div class='line' id='LC934'><span class="cm">	 *  - &#39;update:&lt;key&gt;&#39; (model, related model or collection, options)</span></div><div class='line' id='LC935'><span class="cm">	 */</span></div><div class='line' id='LC936'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">RelationalModel</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC937'>		<span class="nx">relations</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> <span class="c1">// Relation descriptions on the prototype</span></div><div class='line' id='LC938'>		<span class="nx">_relations</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> <span class="c1">// Relation instances</span></div><div class='line' id='LC939'>		<span class="nx">_isInitialized</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC940'>		<span class="nx">_deferProcessing</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC941'>		<span class="nx">_queue</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC942'><br/></div><div class='line' id='LC943'>		<span class="nx">constructor</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">attributes</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC944'>			<span class="c1">// Nasty hack, for cases like &#39;model.get( &lt;HasMany key&gt; ).add( item )&#39;.</span></div><div class='line' id='LC945'>			<span class="c1">// Defer &#39;processQueue&#39;, so that when &#39;Relation.createModels&#39; is used we:</span></div><div class='line' id='LC946'>			<span class="c1">// a) Survive &#39;Backbone.Collection.add&#39;; this takes care we won&#39;t error on &quot;can&#39;t add model to a set twice&quot;</span></div><div class='line' id='LC947'>			<span class="c1">//    (by creating a model from properties, having the model add itself to the collection via one of</span></div><div class='line' id='LC948'>			<span class="c1">//    it&#39;s relations, then trying to add it to the collection).</span></div><div class='line' id='LC949'>			<span class="c1">// b) Trigger &#39;HasMany&#39; collection events only after the model is really fully set up.</span></div><div class='line' id='LC950'>			<span class="c1">// Example that triggers both a and b: &quot;p.get(&#39;jobs&#39;).add( { company: c, person: p } )&quot;.</span></div><div class='line' id='LC951'>			<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC952'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">collection</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC953'>				<span class="k">this</span><span class="p">.</span><span class="nx">_deferProcessing</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC954'><br/></div><div class='line' id='LC955'>				<span class="kd">var</span> <span class="nx">processQueue</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC956'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">model</span> <span class="o">===</span> <span class="nx">dit</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC957'>						<span class="nx">dit</span><span class="p">.</span><span class="nx">_deferProcessing</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC958'>						<span class="nx">dit</span><span class="p">.</span><span class="nx">processQueue</span><span class="p">();</span></div><div class='line' id='LC959'>						<span class="nx">options</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span> <span class="s1">&#39;relational:add&#39;</span><span class="p">,</span> <span class="nx">processQueue</span> <span class="p">);</span></div><div class='line' id='LC960'>					<span class="p">}</span></div><div class='line' id='LC961'>				<span class="p">};</span></div><div class='line' id='LC962'>				<span class="nx">options</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;relational:add&#39;</span><span class="p">,</span> <span class="nx">processQueue</span> <span class="p">);</span></div><div class='line' id='LC963'><br/></div><div class='line' id='LC964'>				<span class="c1">// So we do process the queue eventually, regardless of whether this model really gets added to &#39;options.collection&#39;.</span></div><div class='line' id='LC965'>				<span class="nx">_</span><span class="p">.</span><span class="nx">defer</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC966'>					<span class="nx">processQueue</span><span class="p">(</span> <span class="nx">dit</span> <span class="p">);</span></div><div class='line' id='LC967'>				<span class="p">});</span></div><div class='line' id='LC968'>			<span class="p">}</span></div><div class='line' id='LC969'><br/></div><div class='line' id='LC970'>			<span class="k">this</span><span class="p">.</span><span class="nx">_queue</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">BlockingQueue</span><span class="p">();</span></div><div class='line' id='LC971'>			<span class="k">this</span><span class="p">.</span><span class="nx">_queue</span><span class="p">.</span><span class="nx">block</span><span class="p">();</span></div><div class='line' id='LC972'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">block</span><span class="p">();</span></div><div class='line' id='LC973'><br/></div><div class='line' id='LC974'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC975'><br/></div><div class='line' id='LC976'>			<span class="c1">// Try to run the global queue holding external events</span></div><div class='line' id='LC977'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">unblock</span><span class="p">();</span></div><div class='line' id='LC978'>		<span class="p">},</span></div><div class='line' id='LC979'><br/></div><div class='line' id='LC980'>		<span class="cm">/**</span></div><div class='line' id='LC981'><span class="cm">		 * Override &#39;trigger&#39; to queue &#39;change&#39; and &#39;change:*&#39; events</span></div><div class='line' id='LC982'><span class="cm">		 */</span></div><div class='line' id='LC983'>		<span class="nx">trigger</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">eventName</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC984'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">eventName</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">5</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;change&#39;</span> <span class="o">===</span> <span class="nx">eventName</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">6</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC985'>				<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC986'>				<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC987'>						<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">trigger</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">dit</span><span class="p">,</span> <span class="nx">args</span> <span class="p">);</span></div><div class='line' id='LC988'>					<span class="p">});</span></div><div class='line' id='LC989'>			<span class="p">}</span></div><div class='line' id='LC990'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC991'>				<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">trigger</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC992'>			<span class="p">}</span></div><div class='line' id='LC993'><br/></div><div class='line' id='LC994'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC995'>		<span class="p">},</span></div><div class='line' id='LC996'><br/></div><div class='line' id='LC997'>		<span class="cm">/**</span></div><div class='line' id='LC998'><span class="cm">		 * Initialize Relations present in this.relations; determine the type (HasOne/HasMany), then creates a new instance.</span></div><div class='line' id='LC999'><span class="cm">		 * Invoked in the first call so &#39;set&#39; (which is made from the Backbone.Model constructor).</span></div><div class='line' id='LC1000'><span class="cm">		 */</span></div><div class='line' id='LC1001'>		<span class="nx">initializeRelations</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1002'>			<span class="k">this</span><span class="p">.</span><span class="nx">acquire</span><span class="p">();</span> <span class="c1">// Setting up relations often also involve calls to &#39;set&#39;, and we only want to enter this function once</span></div><div class='line' id='LC1003'>			<span class="k">this</span><span class="p">.</span><span class="nx">_relations</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1004'><br/></div><div class='line' id='LC1005'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">relations</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">rel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1006'>					<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">type</span> <span class="p">)</span> <span class="o">?</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">type</span> <span class="o">:</span>	<span class="nx">Backbone</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">type</span> <span class="p">]</span> <span class="o">||</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">getObjectByName</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">type</span> <span class="p">);</span></div><div class='line' id='LC1007'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">type</span> <span class="o">&amp;&amp;</span> <span class="nx">type</span><span class="p">.</span><span class="nx">prototype</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relation</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1008'>						<span class="k">new</span> <span class="nx">type</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">rel</span> <span class="p">);</span> <span class="c1">// Also pushes the new Relation into _relations</span></div><div class='line' id='LC1009'>					<span class="p">}</span></div><div class='line' id='LC1010'>					<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1011'>						<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">showWarnings</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">console</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span> <span class="s1">&#39;Relation=%o; missing or invalid type!&#39;</span><span class="p">,</span> <span class="nx">rel</span> <span class="p">);</span></div><div class='line' id='LC1012'>					<span class="p">}</span></div><div class='line' id='LC1013'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1014'><br/></div><div class='line' id='LC1015'>			<span class="k">this</span><span class="p">.</span><span class="nx">_isInitialized</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1016'>			<span class="k">this</span><span class="p">.</span><span class="nx">release</span><span class="p">();</span></div><div class='line' id='LC1017'>			<span class="k">this</span><span class="p">.</span><span class="nx">processQueue</span><span class="p">();</span></div><div class='line' id='LC1018'>		<span class="p">},</span></div><div class='line' id='LC1019'><br/></div><div class='line' id='LC1020'>		<span class="cm">/**</span></div><div class='line' id='LC1021'><span class="cm">		 * When new values are set, notify this model&#39;s relations (also if options.silent is set).</span></div><div class='line' id='LC1022'><span class="cm">		 * (Relation.setRelated locks this model before calling &#39;set&#39; on it to prevent loops)</span></div><div class='line' id='LC1023'><span class="cm">		 */</span></div><div class='line' id='LC1024'>		<span class="nx">updateRelations</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1025'>			<span class="k">if</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_isInitialized</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isLocked</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1026'>				<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_relations</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">rel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1027'>					<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">key</span> <span class="p">];</span></div><div class='line' id='LC1028'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">related</span> <span class="o">!==</span> <span class="nx">val</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1029'>						<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;relational:change:&#39;</span> <span class="o">+</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{}</span> <span class="p">);</span></div><div class='line' id='LC1030'>					<span class="p">}</span></div><div class='line' id='LC1031'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1032'>			<span class="p">}</span></div><div class='line' id='LC1033'>		<span class="p">},</span></div><div class='line' id='LC1034'><br/></div><div class='line' id='LC1035'>		<span class="cm">/**</span></div><div class='line' id='LC1036'><span class="cm">		 * Either add to the queue (if we&#39;re not initialized yet), or execute right away.</span></div><div class='line' id='LC1037'><span class="cm">		 */</span></div><div class='line' id='LC1038'>		<span class="nx">queue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">func</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1039'>			<span class="k">this</span><span class="p">.</span><span class="nx">_queue</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="nx">func</span> <span class="p">);</span></div><div class='line' id='LC1040'>		<span class="p">},</span></div><div class='line' id='LC1041'><br/></div><div class='line' id='LC1042'>		<span class="cm">/**</span></div><div class='line' id='LC1043'><span class="cm">		 * Process _queue</span></div><div class='line' id='LC1044'><span class="cm">		 */</span></div><div class='line' id='LC1045'>		<span class="nx">processQueue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1046'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_isInitialized</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_deferProcessing</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_queue</span><span class="p">.</span><span class="nx">isBlocked</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1047'>				<span class="k">this</span><span class="p">.</span><span class="nx">_queue</span><span class="p">.</span><span class="nx">unblock</span><span class="p">();</span></div><div class='line' id='LC1048'>			<span class="p">}</span></div><div class='line' id='LC1049'>		<span class="p">},</span></div><div class='line' id='LC1050'><br/></div><div class='line' id='LC1051'>		<span class="cm">/**</span></div><div class='line' id='LC1052'><span class="cm">		 * Get a specific relation.</span></div><div class='line' id='LC1053'><span class="cm">		 * @param key {string} The relation key to look for.</span></div><div class='line' id='LC1054'><span class="cm">		 * @return {Backbone.Relation} An instance of &#39;Backbone.Relation&#39;, if a relation was found for &#39;key&#39;, or null.</span></div><div class='line' id='LC1055'><span class="cm">		 */</span></div><div class='line' id='LC1056'>		<span class="nx">getRelation</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">key</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1057'>			<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">detect</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_relations</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">rel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1058'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">key</span> <span class="o">===</span> <span class="nx">key</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1059'>					<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1060'>				<span class="p">}</span></div><div class='line' id='LC1061'>			<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1062'>		<span class="p">},</span></div><div class='line' id='LC1063'><br/></div><div class='line' id='LC1064'>		<span class="cm">/**</span></div><div class='line' id='LC1065'><span class="cm">		 * Get all of the created relations.</span></div><div class='line' id='LC1066'><span class="cm">		 * @return {Backbone.Relation[]}</span></div><div class='line' id='LC1067'><span class="cm">		 */</span></div><div class='line' id='LC1068'>		<span class="nx">getRelations</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1069'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_relations</span><span class="p">;</span></div><div class='line' id='LC1070'>		<span class="p">},</span></div><div class='line' id='LC1071'><br/></div><div class='line' id='LC1072'>		<span class="cm">/**</span></div><div class='line' id='LC1073'><span class="cm">		 * Retrieve related objects.</span></div><div class='line' id='LC1074'><span class="cm">		 * @param key {string} The relation key to fetch models for.</span></div><div class='line' id='LC1075'><span class="cm">		 * @param options {object} Options for &#39;Backbone.Model.fetch&#39; and &#39;Backbone.sync&#39;.</span></div><div class='line' id='LC1076'><span class="cm">		 * @return {jQuery.when[]} An array of request objects</span></div><div class='line' id='LC1077'><span class="cm">		 */</span></div><div class='line' id='LC1078'>		<span class="nx">fetchRelated</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1079'>			<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{}</span> <span class="p">);</span></div><div class='line' id='LC1080'>			<span class="kd">var</span> <span class="nx">setUrl</span><span class="p">,</span></div><div class='line' id='LC1081'>				<span class="nx">requests</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1082'>				<span class="nx">rel</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getRelation</span><span class="p">(</span> <span class="nx">key</span> <span class="p">),</span></div><div class='line' id='LC1083'>				<span class="nx">keyContents</span> <span class="o">=</span> <span class="nx">rel</span> <span class="o">&amp;&amp;</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">keyContents</span><span class="p">,</span></div><div class='line' id='LC1084'>				<span class="nx">toFetch</span> <span class="o">=</span> <span class="nx">keyContents</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">select</span><span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="nx">keyContents</span> <span class="p">)</span> <span class="o">?</span> <span class="nx">keyContents</span> <span class="o">:</span> <span class="p">[</span> <span class="nx">keyContents</span> <span class="p">],</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1085'>					<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">resolveIdForItem</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">,</span> <span class="nx">item</span> <span class="p">);</span></div><div class='line' id='LC1086'>					<span class="k">return</span> <span class="nx">id</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">,</span> <span class="nx">id</span> <span class="p">);</span></div><div class='line' id='LC1087'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1088'><br/></div><div class='line' id='LC1089'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">toFetch</span> <span class="o">&amp;&amp;</span> <span class="nx">toFetch</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1090'>				<span class="c1">// Create a model for each entry in &#39;keyContents&#39; that is to be fetched</span></div><div class='line' id='LC1091'>				<span class="kd">var</span> <span class="nx">models</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span> <span class="nx">toFetch</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1092'>					<span class="kd">var</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC1093'><br/></div><div class='line' id='LC1094'>					<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span><span class="p">(</span> <span class="nx">item</span> <span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1095'>						<span class="nx">model</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">(</span> <span class="nx">item</span> <span class="p">);</span></div><div class='line' id='LC1096'>					<span class="p">}</span></div><div class='line' id='LC1097'>					<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1098'>						<span class="kd">var</span> <span class="nx">attrs</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC1099'>						<span class="nx">attrs</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">idAttribute</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">item</span><span class="p">;</span></div><div class='line' id='LC1100'>						<span class="nx">model</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">relatedModel</span><span class="p">(</span> <span class="nx">attrs</span> <span class="p">);</span></div><div class='line' id='LC1101'>					<span class="p">}</span></div><div class='line' id='LC1102'><br/></div><div class='line' id='LC1103'>					<span class="k">return</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC1104'>				<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1105'><br/></div><div class='line' id='LC1106'>				<span class="c1">// Try if the &#39;collection&#39; can provide a url to fetch a set of models in one request.</span></div><div class='line' id='LC1107'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">related</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">url</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1108'>					<span class="nx">setUrl</span> <span class="o">=</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">url</span><span class="p">(</span> <span class="nx">models</span> <span class="p">);</span></div><div class='line' id='LC1109'>				<span class="p">}</span></div><div class='line' id='LC1110'><br/></div><div class='line' id='LC1111'>				<span class="c1">// An assumption is that when &#39;Backbone.Collection.url&#39; is a function, it can handle building of set urls.</span></div><div class='line' id='LC1112'>				<span class="c1">// To make sure it can, test if the url we got by supplying a list of models to fetch is different from</span></div><div class='line' id='LC1113'>				<span class="c1">// the one supplied for the default fetch action (without args to &#39;url&#39;).</span></div><div class='line' id='LC1114'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">setUrl</span> <span class="o">&amp;&amp;</span> <span class="nx">setUrl</span> <span class="o">!==</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">url</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1115'>					<span class="kd">var</span> <span class="nx">opts</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">(</span></div><div class='line' id='LC1116'>						<span class="p">{</span></div><div class='line' id='LC1117'>							<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1118'>								<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC1119'>								<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">models</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1120'>									<span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="s1">&#39;destroy&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1121'>									<span class="nx">options</span><span class="p">.</span><span class="nx">error</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">args</span> <span class="p">);</span></div><div class='line' id='LC1122'>								<span class="p">});</span></div><div class='line' id='LC1123'>							<span class="p">},</span></div><div class='line' id='LC1124'>							<span class="nx">url</span><span class="o">:</span> <span class="nx">setUrl</span></div><div class='line' id='LC1125'>						<span class="p">},</span></div><div class='line' id='LC1126'>						<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC1127'>						<span class="p">{</span> <span class="nx">add</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span></div><div class='line' id='LC1128'>					<span class="p">);</span></div><div class='line' id='LC1129'><br/></div><div class='line' id='LC1130'>					<span class="nx">requests</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">related</span><span class="p">.</span><span class="nx">fetch</span><span class="p">(</span> <span class="nx">opts</span> <span class="p">)</span> <span class="p">];</span></div><div class='line' id='LC1131'>				<span class="p">}</span></div><div class='line' id='LC1132'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1133'>					<span class="nx">requests</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span> <span class="nx">models</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1134'>						<span class="kd">var</span> <span class="nx">opts</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">(</span></div><div class='line' id='LC1135'>							<span class="p">{</span></div><div class='line' id='LC1136'>								<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1137'>									<span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="s1">&#39;destroy&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1138'>									<span class="nx">options</span><span class="p">.</span><span class="nx">error</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC1139'>								<span class="p">}</span></div><div class='line' id='LC1140'>							<span class="p">},</span></div><div class='line' id='LC1141'>							<span class="nx">options</span></div><div class='line' id='LC1142'>						<span class="p">);</span></div><div class='line' id='LC1143'>						<span class="k">return</span> <span class="nx">model</span><span class="p">.</span><span class="nx">fetch</span><span class="p">(</span> <span class="nx">opts</span> <span class="p">);</span></div><div class='line' id='LC1144'>					<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1145'>				<span class="p">}</span></div><div class='line' id='LC1146'>			<span class="p">}</span></div><div class='line' id='LC1147'><br/></div><div class='line' id='LC1148'>			<span class="k">return</span> <span class="nx">requests</span><span class="p">;</span></div><div class='line' id='LC1149'>		<span class="p">},</span></div><div class='line' id='LC1150'><br/></div><div class='line' id='LC1151'>		<span class="nx">set</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1152'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">block</span><span class="p">();</span></div><div class='line' id='LC1153'><br/></div><div class='line' id='LC1154'>			<span class="c1">// Duplicate backbone&#39;s behavior to allow separate key/value parameters, instead of a single &#39;attributes&#39; object</span></div><div class='line' id='LC1155'>			<span class="kd">var</span> <span class="nx">attributes</span><span class="p">;</span></div><div class='line' id='LC1156'>			<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span> <span class="nx">key</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">key</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1157'>				<span class="nx">attributes</span> <span class="o">=</span> <span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC1158'>				<span class="nx">options</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1159'>			<span class="p">}</span></div><div class='line' id='LC1160'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1161'>				<span class="nx">attributes</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC1162'>				<span class="nx">attributes</span><span class="p">[</span> <span class="nx">key</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1163'>			<span class="p">}</span></div><div class='line' id='LC1164'><br/></div><div class='line' id='LC1165'>			<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">set</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC1166'><br/></div><div class='line' id='LC1167'>			<span class="c1">// &#39;set&#39; is called quite late in &#39;Backbone.Model.prototype.constructor&#39;, but before &#39;initialize&#39;.</span></div><div class='line' id='LC1168'>			<span class="c1">// Ideal place to set up relations :)</span></div><div class='line' id='LC1169'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_isInitialized</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isLocked</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1170'>				<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1171'>				<span class="k">this</span><span class="p">.</span><span class="nx">initializeRelations</span><span class="p">();</span></div><div class='line' id='LC1172'>			<span class="p">}</span></div><div class='line' id='LC1173'>			<span class="c1">// Update the &#39;idAttribute&#39; in Backbone.store if; we don&#39;t want it to miss an &#39;id&#39; update due to {silent:true}</span></div><div class='line' id='LC1174'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">attributes</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">idAttribute</span> <span class="k">in</span> <span class="nx">attributes</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1175'>				<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1176'>			<span class="p">}</span></div><div class='line' id='LC1177'><br/></div><div class='line' id='LC1178'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">attributes</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1179'>				<span class="k">this</span><span class="p">.</span><span class="nx">updateRelations</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1180'>			<span class="p">}</span></div><div class='line' id='LC1181'><br/></div><div class='line' id='LC1182'>			<span class="c1">// Try to run the global queue holding external events</span></div><div class='line' id='LC1183'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">unblock</span><span class="p">();</span></div><div class='line' id='LC1184'><br/></div><div class='line' id='LC1185'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC1186'>		<span class="p">},</span></div><div class='line' id='LC1187'><br/></div><div class='line' id='LC1188'>		<span class="nx">unset</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">attribute</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1189'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">block</span><span class="p">();</span></div><div class='line' id='LC1190'><br/></div><div class='line' id='LC1191'>			<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">unset</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC1192'>			<span class="k">this</span><span class="p">.</span><span class="nx">updateRelations</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1193'><br/></div><div class='line' id='LC1194'>			<span class="c1">// Try to run the global queue holding external events</span></div><div class='line' id='LC1195'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">unblock</span><span class="p">();</span></div><div class='line' id='LC1196'><br/></div><div class='line' id='LC1197'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC1198'>		<span class="p">},</span></div><div class='line' id='LC1199'><br/></div><div class='line' id='LC1200'>		<span class="nx">clear</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1201'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">block</span><span class="p">();</span></div><div class='line' id='LC1202'><br/></div><div class='line' id='LC1203'>			<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clear</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC1204'>			<span class="k">this</span><span class="p">.</span><span class="nx">updateRelations</span><span class="p">(</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1205'><br/></div><div class='line' id='LC1206'>			<span class="c1">// Try to run the global queue holding external events</span></div><div class='line' id='LC1207'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">unblock</span><span class="p">();</span></div><div class='line' id='LC1208'><br/></div><div class='line' id='LC1209'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC1210'>		<span class="p">},</span></div><div class='line' id='LC1211'><br/></div><div class='line' id='LC1212'>		<span class="cm">/**</span></div><div class='line' id='LC1213'><span class="cm">		 * Override &#39;change&#39;, so the change will only execute after &#39;set&#39; has finised (relations are updated),</span></div><div class='line' id='LC1214'><span class="cm">		 * and &#39;previousAttributes&#39; will be available when the event is fired.</span></div><div class='line' id='LC1215'><span class="cm">		 */</span></div><div class='line' id='LC1216'>		<span class="nx">change</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1217'>			<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC1218'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1219'>					<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">change</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">dit</span><span class="p">,</span> <span class="nx">args</span> <span class="p">);</span></div><div class='line' id='LC1220'>				<span class="p">});</span></div><div class='line' id='LC1221'>		<span class="p">},</span></div><div class='line' id='LC1222'><br/></div><div class='line' id='LC1223'>		<span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1224'>			<span class="kd">var</span> <span class="nx">attributes</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">attributes</span> <span class="p">);</span></div><div class='line' id='LC1225'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span> <span class="nx">attributes</span><span class="p">[</span> <span class="k">this</span><span class="p">.</span><span class="nx">idAttribute</span> <span class="p">]</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1226'>				<span class="nx">attributes</span><span class="p">[</span> <span class="k">this</span><span class="p">.</span><span class="nx">idAttribute</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1227'>			<span class="p">}</span></div><div class='line' id='LC1228'><br/></div><div class='line' id='LC1229'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">getRelations</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">rel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1230'>				<span class="k">delete</span> <span class="nx">attributes</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">key</span> <span class="p">];</span></div><div class='line' id='LC1231'>			<span class="p">});</span></div><div class='line' id='LC1232'><br/></div><div class='line' id='LC1233'>			<span class="k">return</span> <span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">constructor</span><span class="p">(</span> <span class="nx">attributes</span> <span class="p">);</span></div><div class='line' id='LC1234'>		<span class="p">},</span></div><div class='line' id='LC1235'><br/></div><div class='line' id='LC1236'>		<span class="cm">/**</span></div><div class='line' id='LC1237'><span class="cm">		 * Convert relations to JSON, omits them when required</span></div><div class='line' id='LC1238'><span class="cm">		 */</span></div><div class='line' id='LC1239'>		<span class="nx">toJSON</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1240'>			<span class="c1">// If this Model has already been fully serialized in this branch once, return to avoid loops</span></div><div class='line' id='LC1241'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">isLocked</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1242'>				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC1243'>			<span class="p">}</span></div><div class='line' id='LC1244'><br/></div><div class='line' id='LC1245'>			<span class="k">this</span><span class="p">.</span><span class="nx">acquire</span><span class="p">();</span></div><div class='line' id='LC1246'>			<span class="kd">var</span> <span class="nx">json</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1247'><br/></div><div class='line' id='LC1248'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_relations</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">rel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1249'>				<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">json</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">key</span> <span class="p">];</span></div><div class='line' id='LC1250'><br/></div><div class='line' id='LC1251'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">includeInJSON</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1252'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">value</span><span class="p">.</span><span class="nx">toJSON</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1253'>						<span class="nx">json</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">keyDestination</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">toJSON</span><span class="p">();</span></div><div class='line' id='LC1254'>					<span class="p">}</span></div><div class='line' id='LC1255'>					<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1256'>						<span class="nx">json</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">keyDestination</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1257'>					<span class="p">}</span></div><div class='line' id='LC1258'>				<span class="p">}</span></div><div class='line' id='LC1259'>				<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">includeInJSON</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1260'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">value</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1261'>						<span class="nx">json</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">keyDestination</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">pluck</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">includeInJSON</span> <span class="p">);</span></div><div class='line' id='LC1262'>					<span class="p">}</span></div><div class='line' id='LC1263'>					<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">value</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1264'>						<span class="nx">json</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">keyDestination</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">includeInJSON</span> <span class="p">);</span></div><div class='line' id='LC1265'>					<span class="p">}</span></div><div class='line' id='LC1266'>					<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1267'>						<span class="nx">json</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">keyDestination</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1268'>					<span class="p">}</span></div><div class='line' id='LC1269'>				<span class="p">}</span></div><div class='line' id='LC1270'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1271'>					<span class="k">delete</span> <span class="nx">json</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">key</span> <span class="p">];</span></div><div class='line' id='LC1272'>				<span class="p">}</span></div><div class='line' id='LC1273'><br/></div><div class='line' id='LC1274'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">keyDestination</span> <span class="o">!==</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">key</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1275'>					<span class="k">delete</span> <span class="nx">json</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">key</span> <span class="p">];</span></div><div class='line' id='LC1276'>				<span class="p">}</span></div><div class='line' id='LC1277'>			<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1278'><br/></div><div class='line' id='LC1279'>			<span class="k">this</span><span class="p">.</span><span class="nx">release</span><span class="p">();</span></div><div class='line' id='LC1280'>			<span class="k">return</span> <span class="nx">json</span><span class="p">;</span></div><div class='line' id='LC1281'>		<span class="p">}</span></div><div class='line' id='LC1282'>	<span class="p">});</span></div><div class='line' id='LC1283'>	<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">RelationalModel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Semaphore</span> <span class="p">);</span></div><div class='line' id='LC1284'><br/></div><div class='line' id='LC1285'>	<span class="cm">/**</span></div><div class='line' id='LC1286'><span class="cm">	 * Override Backbone.Collection.add, so objects fetched from the server multiple times will</span></div><div class='line' id='LC1287'><span class="cm">	 * update the existing Model. Also, trigger &#39;relational:add&#39;.</span></div><div class='line' id='LC1288'><span class="cm">	 */</span></div><div class='line' id='LC1289'>	<span class="kd">var</span> <span class="nx">add</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">__add</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">add</span><span class="p">;</span></div><div class='line' id='LC1290'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">add</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">models</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1291'>		<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC1292'>		<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="nx">models</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1293'>			<span class="nx">models</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">models</span> <span class="p">];</span></div><div class='line' id='LC1294'>		<span class="p">}</span></div><div class='line' id='LC1295'><br/></div><div class='line' id='LC1296'>		<span class="kd">var</span> <span class="nx">modelsToAdd</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1297'><br/></div><div class='line' id='LC1298'>		<span class="c1">//console.debug( &#39;calling add on coll=%o; model=%o, options=%o&#39;, this, models, options );</span></div><div class='line' id='LC1299'>		<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">models</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1300'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="p">(</span> <span class="nx">model</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1301'>				<span class="c1">// Try to find &#39;model&#39; in Backbone.store. If it already exists, set the new properties on it.</span></div><div class='line' id='LC1302'>				<span class="kd">var</span> <span class="nx">existingModel</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">,</span> <span class="nx">model</span><span class="p">[</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">idAttribute</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC1303'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">existingModel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1304'>					<span class="nx">existingModel</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">existingModel</span><span class="p">.</span><span class="nx">parse</span> <span class="o">?</span> <span class="nx">existingModel</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="o">:</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1305'>					<span class="nx">model</span> <span class="o">=</span> <span class="nx">existingModel</span><span class="p">;</span></div><div class='line' id='LC1306'>				<span class="p">}</span></div><div class='line' id='LC1307'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1308'>					<span class="nx">model</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_prepareModel</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1309'>				<span class="p">}</span></div><div class='line' id='LC1310'>			<span class="p">}</span></div><div class='line' id='LC1311'><br/></div><div class='line' id='LC1312'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">model</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">getByCid</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1313'>				<span class="nx">modelsToAdd</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC1314'>			<span class="p">}</span></div><div class='line' id='LC1315'>		<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1316'><br/></div><div class='line' id='LC1317'><br/></div><div class='line' id='LC1318'>		<span class="c1">// Add &#39;models&#39; in a single batch, so the original add will only be called once (and thus &#39;sort&#39;, etc).</span></div><div class='line' id='LC1319'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">modelsToAdd</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1320'>			<span class="nx">add</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">modelsToAdd</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1321'><br/></div><div class='line' id='LC1322'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">modelsToAdd</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1323'>				<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;relational:add&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1324'>			<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1325'>		<span class="p">}</span></div><div class='line' id='LC1326'><br/></div><div class='line' id='LC1327'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1328'>	<span class="p">};</span></div><div class='line' id='LC1329'><br/></div><div class='line' id='LC1330'>	<span class="cm">/**</span></div><div class='line' id='LC1331'><span class="cm">	 * Override &#39;Backbone.Collection.remove&#39; to trigger &#39;relational:remove&#39;.</span></div><div class='line' id='LC1332'><span class="cm">	 */</span></div><div class='line' id='LC1333'>	<span class="kd">var</span> <span class="nx">remove</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">__remove</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">remove</span><span class="p">;</span></div><div class='line' id='LC1334'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">remove</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">models</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1335'>		<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC1336'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="nx">models</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1337'>			<span class="nx">models</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">models</span> <span class="p">];</span></div><div class='line' id='LC1338'>		<span class="p">}</span></div><div class='line' id='LC1339'><br/></div><div class='line' id='LC1340'>		<span class="c1">//console.debug(&#39;calling remove on coll=%o; models=%o, options=%o&#39;, this, models, options );</span></div><div class='line' id='LC1341'>		<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">models</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1342'>			<span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getByCid</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="nx">model</span> <span class="p">);</span></div><div class='line' id='LC1343'><br/></div><div class='line' id='LC1344'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">model</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1345'>				<span class="nx">remove</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1346'>				<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;relational:remove&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1347'>			<span class="p">}</span></div><div class='line' id='LC1348'>		<span class="p">},</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC1349'><br/></div><div class='line' id='LC1350'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1351'>	<span class="p">};</span></div><div class='line' id='LC1352'><br/></div><div class='line' id='LC1353'>	<span class="cm">/**</span></div><div class='line' id='LC1354'><span class="cm">	 * Override &#39;Backbone.Collection.reset&#39; to trigger &#39;relational:reset&#39;.</span></div><div class='line' id='LC1355'><span class="cm">	 */</span></div><div class='line' id='LC1356'>	<span class="kd">var</span> <span class="nx">reset</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">__reset</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">reset</span><span class="p">;</span></div><div class='line' id='LC1357'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">reset</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">models</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1358'>		<span class="nx">reset</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">models</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1359'>		<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="s1">&#39;relational:reset&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1360'><br/></div><div class='line' id='LC1361'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1362'>	<span class="p">};</span></div><div class='line' id='LC1363'><br/></div><div class='line' id='LC1364'>	<span class="cm">/**</span></div><div class='line' id='LC1365'><span class="cm">	 * Override &#39;Backbone.Collection.sort&#39; to trigger &#39;relational:reset&#39;.</span></div><div class='line' id='LC1366'><span class="cm">	 */</span></div><div class='line' id='LC1367'>	<span class="kd">var</span> <span class="nx">sort</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">__sort</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">sort</span><span class="p">;</span></div><div class='line' id='LC1368'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">sort</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1369'>		<span class="nx">sort</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1370'>		<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="s1">&#39;relational:reset&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC1371'><br/></div><div class='line' id='LC1372'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1373'>	<span class="p">};</span></div><div class='line' id='LC1374'><br/></div><div class='line' id='LC1375'>	<span class="cm">/**</span></div><div class='line' id='LC1376'><span class="cm">	 * Override &#39;Backbone.Collection.trigger&#39; so &#39;add&#39;, &#39;remove&#39; and &#39;reset&#39; events are queued until relations</span></div><div class='line' id='LC1377'><span class="cm">	 * are ready.</span></div><div class='line' id='LC1378'><span class="cm">	 */</span></div><div class='line' id='LC1379'>	<span class="kd">var</span> <span class="nx">trigger</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">__trigger</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">trigger</span><span class="p">;</span></div><div class='line' id='LC1380'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">trigger</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">eventName</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1381'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">eventName</span> <span class="o">===</span> <span class="s1">&#39;add&#39;</span> <span class="o">||</span> <span class="nx">eventName</span> <span class="o">===</span> <span class="s1">&#39;remove&#39;</span> <span class="o">||</span> <span class="nx">eventName</span> <span class="o">===</span> <span class="s1">&#39;reset&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1382'>			<span class="kd">var</span> <span class="nx">dit</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC1383'>			<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">eventQueue</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1384'>					<span class="nx">trigger</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">dit</span><span class="p">,</span> <span class="nx">args</span> <span class="p">);</span></div><div class='line' id='LC1385'>				<span class="p">});</span></div><div class='line' id='LC1386'>		<span class="p">}</span></div><div class='line' id='LC1387'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1388'>			<span class="nx">trigger</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC1389'>		<span class="p">}</span></div><div class='line' id='LC1390'><br/></div><div class='line' id='LC1391'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1392'>	<span class="p">};</span></div><div class='line' id='LC1393'><br/></div><div class='line' id='LC1394'>	<span class="c1">// Override .extend() to check for reverseRelations to initialize.</span></div><div class='line' id='LC1395'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">RelationalModel</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">protoProps</span><span class="p">,</span> <span class="nx">classProps</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1396'>		<span class="kd">var</span> <span class="nx">child</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">extend</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC1397'><br/></div><div class='line' id='LC1398'>		<span class="kd">var</span> <span class="nx">relations</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">protoProps</span> <span class="o">&amp;&amp;</span> <span class="nx">protoProps</span><span class="p">.</span><span class="nx">relations</span> <span class="p">)</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC1399'>		<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">relations</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">rel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1400'>			<span class="k">if</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">reverseRelation</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1401'>				<span class="nx">rel</span><span class="p">.</span><span class="nx">model</span> <span class="o">=</span> <span class="nx">child</span><span class="p">;</span></div><div class='line' id='LC1402'><br/></div><div class='line' id='LC1403'>				<span class="kd">var</span> <span class="nx">preInitialize</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1404'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1405'>					<span class="cm">/**</span></div><div class='line' id='LC1406'><span class="cm">					 * The related model might not be defined for two reasons</span></div><div class='line' id='LC1407'><span class="cm">					 *  1. it never gets defined, e.g. a typo</span></div><div class='line' id='LC1408'><span class="cm">					 *  2. it is related to itself</span></div><div class='line' id='LC1409'><span class="cm">					 * In neither of these cases do we need to pre-initialize reverse relations.</span></div><div class='line' id='LC1410'><span class="cm">					 */</span></div><div class='line' id='LC1411'>					<span class="kd">var</span> <span class="nx">relatedModel</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">getObjectByName</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">relatedModel</span> <span class="p">);</span></div><div class='line' id='LC1412'>					<span class="nx">preInitialize</span> <span class="o">=</span> <span class="nx">relatedModel</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">relatedModel</span><span class="p">.</span><span class="nx">prototype</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">RelationalModel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="p">);</span></div><div class='line' id='LC1413'>				<span class="p">}</span></div><div class='line' id='LC1414'><br/></div><div class='line' id='LC1415'>				<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">type</span> <span class="p">)</span> <span class="o">?</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">type</span> <span class="o">:</span> <span class="nx">Backbone</span><span class="p">[</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">type</span> <span class="p">]</span> <span class="o">||</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relational</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">getObjectByName</span><span class="p">(</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">type</span> <span class="p">);</span></div><div class='line' id='LC1416'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">preInitialize</span> <span class="o">&amp;&amp;</span> <span class="nx">type</span> <span class="o">&amp;&amp;</span> <span class="nx">type</span><span class="p">.</span><span class="nx">prototype</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Relation</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1417'>					<span class="k">new</span> <span class="nx">type</span><span class="p">(</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">rel</span> <span class="p">);</span></div><div class='line' id='LC1418'>				<span class="p">}</span></div><div class='line' id='LC1419'>			<span class="p">}</span></div><div class='line' id='LC1420'>		<span class="p">});</span></div><div class='line' id='LC1421'><br/></div><div class='line' id='LC1422'>		<span class="k">return</span> <span class="nx">child</span><span class="p">;</span></div><div class='line' id='LC1423'>	<span class="p">};</span></div><div class='line' id='LC1424'><br/></div><div class='line' id='LC1425'><span class="p">})();</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/chaonextdoor/Backbone-relational/tree-list/080b8268e2ac1ddb32e2bffe169d435efd87c3b3" data-blob-url-prefix="/chaonextdoor/Backbone-relational/blob/080b8268e2ac1ddb32e2bffe169d435efd87c3b3">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329920549" height="64" width="64">
</div>

      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.42562s from fe15.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329920549" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div class="ajax-error-message">
      <p><span class="icon"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1329920549" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1329920549" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
      </ul>
    </div>

    
    
    
    <span id='server_response_time' data-time='0.42821' data-host='fe15'></span>
  </body>
</html>

