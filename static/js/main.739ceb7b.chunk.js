(this["webpackJsonpreact-app-1"]=this["webpackJsonpreact-app-1"]||[]).push([[0],{53:function(e,a,t){e.exports=t(90)},58:function(e,a,t){},63:function(e,a,t){},65:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){e.exports=t.p+"static/media/bg-1.e4e2cd7f.jpg"},90:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),s=(t(58),t(59),t(60),t(61),t(12)),o=t(13),i=t(16),m=t(14),u=t(15),h=(t(62),t(63),t(8)),d=t.n(h),p=t(97),g=t(98),f=t(44),b=t(99),E=(t(65),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={selectedLeague:"PL"},t.findClub=function(){t.props.selectLeague(t.state.selectedLeague)},t.handleChange=function(e){var a=e.target.options[e.target.selectedIndex].getAttribute("name");t.setState({selectedLeague:a})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{bg:"dark",variant:"dark",className:"navbar"},r.a.createElement(g.a,{block:!0},r.a.createElement(f.a,null,r.a.createElement(g.a.Control,{as:"select",name:"select",id:"selectLeague",className:"select-css",ref:"club",onChange:function(a){return e.handleChange(a)}},r.a.createElement("option",{name:"PL"},"Premier League"),r.a.createElement("option",{name:"PD"},"La Liga"),r.a.createElement("option",{name:"SA"},"Serie A"),r.a.createElement("option",{name:"BL1"},"Bundesliga"),r.a.createElement("option",{name:"FL1"},"Ligue 1"))),r.a.createElement(b.a,{className:"search-btn",variant:"dark",id:"btn-1",onClick:this.findClub},"Search")))}}]),a}(r.a.Component)),w=(t(70),t(95)),y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={leagueTable:[]},t.getStandings=function(){var e,a,n,r,c;return d.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,d.a.awrap(fetch("https://api.football-data.org/v2/competitions/".concat(t.props.leagueIndex,"/standings"),{headers:{"X-Auth-Token":t.props.apiKey},mode:"cors"}));case 3:return e=l.sent,l.next=6,d.a.awrap(e.json());case 6:for(r in a=l.sent,console.log(a.standings),n=a.standings[0],t.setState({leagueTable:[]}),n.table)(c=t.state.leagueTable.slice()).push({position:n.table[r].position,index:n.table[r].team.id,name:n.table[r].team.name,crest:n.table[r].team.crestUrl,points:n.table[r].points,played:n.table[r].playedGames,won:n.table[r].won,drew:n.table[r].draw,lost:n.table[r].lost,goalsFor:n.table[r].goalsFor,goalsAgainst:n.table[r].goalsAgainst,goalDifference:n.table[r].goalDifference}),t.setState({leagueTable:c});console.log(t.state.leagueTable),l.next=17;break;case 14:l.prev=14,l.t0=l.catch(0),alert("Exceeded amount of available api calls. Try again in a minute.");case 17:case"end":return l.stop()}}),null,null,[[0,14]])},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.leagueTable.length>0&&r.a.createElement(w.a,{ref:function(a){e.childTable=a},className:"league-table",striped:!0,hover:!0,size:"sm",responsive:"xl"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"10",align:"center",class:"league-title"},"League Table")),r.a.createElement("tr",null,r.a.createElement("th",null,"Position"),r.a.createElement("th",null,"Team"),r.a.createElement("th",null,"Played"),r.a.createElement("th",null,"Points"),r.a.createElement("th",null,"W"),r.a.createElement("th",null,"D"),r.a.createElement("th",null,"L"),r.a.createElement("th",null,"GF"),r.a.createElement("th",null,"GA"),r.a.createElement("th",null,"GD"))),r.a.createElement("tbody",null,this.state.leagueTable.map((function(e){return r.a.createElement("tr",{key:e.position},r.a.createElement("td",{width:"5%"},e.position),r.a.createElement("td",{width:"15%",className:"table-team-name"},r.a.createElement("img",{src:e.crest,alt:"crest",className:"crest"})," ",e.name),r.a.createElement("td",{width:"10%"},e.played),r.a.createElement("td",{width:"10%"},e.points),r.a.createElement("td",{width:"10%"},e.won),r.a.createElement("td",{width:"10%"},e.drew),r.a.createElement("td",{width:"10%"},e.lost),r.a.createElement("td",{width:"10%"},e.goalsFor),r.a.createElement("td",{width:"10%"},e.goalsAgainst),r.a.createElement("td",{width:"10%"},e.goalDifference))})))))}}]),a}(r.a.Component),T=(t(71),t(32)),v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={leagueFixtures:[],leagueResults:[],currentWeek:0,matchInfo:[]},t.getCurrentWeekFixtures=function(){var e,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(fetch("https://api.football-data.org/v2/competitions/".concat(t.props.leagueIndex,"/matches?status=SCHEDULED"),{headers:{"X-Auth-Token":t.props.apiKey},mode:"cors"}));case 2:return e=n.sent,n.next=5,d.a.awrap(e.json());case 5:a=n.sent,console.log(a),t.setState({leagueFixtures:[],currentWeek:a.matches[0].matchday}),console.log(t.state.currentWeek),console.log(t.props.leagueIndex),t.getFixtures(t.state.currentWeek);case 11:case"end":return n.stop()}}))},t.getFixtures=function(e){var a,n,r,c;return d.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,d.a.awrap(fetch("https://api.football-data.org/v2/competitions/".concat(t.props.leagueIndex,"/matches?matchday=").concat(e),{headers:{"X-Auth-Token":t.props.apiKey},mode:"cors"}));case 3:return a=l.sent,l.next=6,d.a.awrap(a.json());case 6:for(r in n=l.sent,console.log(n),t.setState({leagueFixtures:[]}),n.matches)c=t.state.leagueFixtures.slice(),null==n.matches[r].score.fullTime.homeTeam&null==n.matches[r].score.fullTime.awayTeam?c.push({index:n.matches[r].id,status:n.matches[r].status,homeTeamName:n.matches[r].homeTeam.name,homeTeamID:n.matches[r].homeTeam.id,awayTeamName:n.matches[r].awayTeam.name,awayTeamID:n.matches[r].awayTeam.id,homeTeamScore:"-",awayTeamScore:"-"}):c.push({index:n.matches[r].id,status:n.matches[r].status,homeTeamName:n.matches[r].homeTeam.name,homeTeamID:n.matches[r].homeTeam.id,awayTeamName:n.matches[r].awayTeam.name,awayTeamID:n.matches[r].awayTeam.id,homeTeamScore:n.matches[r].score.fullTime.homeTeam,awayTeamScore:n.matches[r].score.fullTime.awayTeam}),t.setState({leagueFixtures:c});l.next=15;break;case 12:l.prev=12,l.t0=l.catch(0),alert("Exceeded amount of available api calls. Try again in a minute");case 15:console.log(t.state.leagueFixtures);case 16:case"end":return l.stop()}}),null,null,[[0,12]])},t.displayPreviousGameweek=function(){try{var e=t.state.currentWeek-1;t.setState({currentWeek:t.state.currentWeek-1}),console.log(e),t.getFixtures(e)}catch(a){alert("Exceeded amount of available api calls. Try again in a minute")}},t.displayNextGameweek=function(e){try{t.setState({currentWeek:e}),console.log(e),t.getFixtures(e)}catch(a){alert("Exceeded amount of available api calls. Try again in a minute")}},t.displayMatchStatistics=function(e){var a,n,r;return d.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,d.a.awrap(fetch("https://api.football-data.org/v2/matches/".concat(e),{headers:{"X-Auth-Token":t.props.apiKey},mode:"cors"}));case 3:return a=c.sent,c.next=6,d.a.awrap(a.json());case 6:n=c.sent,console.log(n),t.setState({matchInfo:[]});try{(r=t.state.matchInfo.slice()).push({index:n.match.id,status:n.match.status,matchday:n.match.matchday,homeTeamName:n.match.homeTeam.name,homeTeamID:n.match.homeTeam.id,awayTeamName:n.match.awayTeam.name,awayTeamID:n.match.awayTeam.id,homeTeamScore:n.match.score.fullTime.homeTeam,awayTeamScore:n.match.score.fullTime.awayTeam,halfTimehomeTeamScore:n.match.score.halfTime.awayTeam,halfTimeawayTeamScore:n.match.score.halfTime.awayTeam,referee:n.match.referees[0].name,venue:n.match.venue}),t.setState({matchInfo:r}),console.log(t.state.matchInfo)}catch(l){alert("No Details")}c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),alert("Exceeded amount of available api calls. Try again in a minute");case 15:case"end":return c.stop()}}),null,null,[[0,12]])},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.leagueFixtures.length>0&&r.a.createElement(w.a,{className:"fixtures-table",width:"40%",striped:!0,hover:!0,size:"sm",responsive:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3"},r.a.createElement(b.a,{id:"btn-1",className:"arrow-left",onClick:function(){return e.displayPreviousGameweek(e.state.currentWeek-1)}},r.a.createElement(T.d,{icon:"caret-left"})),r.a.createElement("p",{className:"fixtures-table-details"},"Gameweek ",this.state.currentWeek),r.a.createElement(b.a,{id:"btn-1",className:"arrow-right",onClick:function(){return e.displayNextGameweek(e.state.currentWeek+1)}},r.a.createElement(T.d,{icon:"caret-right"}))))),r.a.createElement("tbody",null,this.state.leagueFixtures.map((function(a){return r.a.createElement("tr",{onClick:function(){return e.displayMatchStatistics(a.index)},className:"fixture-row",key:a.index},r.a.createElement("td",{width:"40%",align:"right"},a.homeTeamName),r.a.createElement("td",{width:"20%"},a.homeTeamScore," : ",a.awayTeamScore),r.a.createElement("td",{width:"40%",align:"left"},a.awayTeamName))})))),this.state.matchInfo.length>0&&r.a.createElement(w.a,{className:"fixtures-table",width:"40%",striped:!0,hover:!0,size:"sm",responsive:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3"},r.a.createElement("p",{className:"fixtures-table-details"},"Match details")))),r.a.createElement("tbody",null,this.state.matchInfo.map((function(e){return r.a.createElement("tr",{key:e.index},r.a.createElement("td",{width:"40%",align:"right"},e.homeTeamName),r.a.createElement("td",{width:"20%"},e.homeTeamScore," : ",e.awayTeamScore),r.a.createElement("td",{width:"40%",align:"left"},e.awayTeamName))})),this.state.matchInfo.map((function(e){return r.a.createElement("tr",{key:e.index},r.a.createElement("td",{colSpan:"3"},"Referee: ",e.referee))})),this.state.matchInfo.map((function(e){return r.a.createElement("tr",{key:e.index},r.a.createElement("td",{colSpan:"3"},"Venue: ",e.venue))})))))}}]),a}(r.a.Component),x=(t(88),t(96)),k=t(45),S="d4a9110b90c6415bb3d252836a4bf034",N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={leagueCode:" ",leagueIndex:0},t.getData=function(e){var a,n,r;return d.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,d.a.awrap(fetch("https://api.football-data.org/v2/competitions",{headers:{"X-Auth-Token":S},mode:"cors"}));case 3:return a=c.sent,c.next=6,d.a.awrap(a.json());case 6:for(r in n=c.sent,console.log(n),n.competitions)n.competitions[r].code===e&&(t.setState({leagueCode:n.competitions[r].code,leagueIndex:n.competitions[r].id}),console.log(n.competitions[r].code));c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),alert("Exceeded amount of available api calls. Try again in a minute.");case 14:t.LeagueTable.getStandings(),t.Fixtures.getCurrentWeekFixtures();case 16:case"end":return c.stop()}}),null,null,[[0,11]])},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app-data"},r.a.createElement(E,{selectLeague:this.getData})," "!=this.state.leagueCode&&r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement("p",{className:"league-title"},"League info")),r.a.createElement("div",{className:"league-info"},r.a.createElement(x.a,{className:"row"},r.a.createElement(k.a,{className:"column"},r.a.createElement(y,{ref:function(a){return e.LeagueTable=a},leagueIndex:this.state.leagueIndex,apiKey:S})),r.a.createElement(k.a,{className:"column"},r.a.createElement(v,{ref:function(a){return e.Fixtures=a},leagueIndex:this.state.leagueIndex,apiKey:S}))))))}}]),a}(r.a.Component),j=(t(89),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(N,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.739ceb7b.chunk.js.map