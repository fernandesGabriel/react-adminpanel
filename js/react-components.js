/* Top Navigation Components */
class TopNavigation extends React.Component {
	render() {
	    return (
	        <nav className="navbar navbar-inverse navbar-fixed-top">
	            <div className="container-fluid">
	                <div className="navbar-header col-sm-3 col-md-2">
	                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	                        <span className="sr-only">Toogle Navigation</span>
	                        <span className="icon-bar"></span>
	                        <span className="icon-bar"></span>
	                        <span className="icon-bar"></span>
	                    </button>
	                    <PageBrand url="#" image="http://placehold.it/130x50" />
	                </div>
	                <div className="navbar-content col-sm-9 col-md-10">
	                    <PageHeaderTitle title={this.props.title} />
	                    <ProfileNavigation image={this.props.profileimage} />
	                    <TopSearchBar />
	                </div>
	            </div>
	        </nav>
	 	);
	}
}

class PageBrand extends React.Component {
	render() {
	    return (
	        <a className="navbar-brand" href={this.props.url}> 
	            <img src={this.props.image} />
	        </a>
	 	);
	}
}

class PageHeaderTitle extends React.Component {
	render() {
	    return (
        	<h1 className="page-header">{this.props.title}</h1>
	 	);
	}
}

class TopSearchBar extends React.Component {
	render() {
	    return (
	        <form id="searchbar" className="navbar-form navbar-right">
	            <input type="text" className="form-control" placeholder="Search" />
	            <button type="button" className="btn btn-default navbar-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
	        </form>
	 	);
	}
}

class ProfileNavigation extends React.Component {
	render() {
	    return (
	        <ul className="navbar-profile nav navbar-nav navbar-right">
	            <li className="dropdown">
	                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
	                    <img src={this.props.image} /> 
	                    <span className="caret"></span>
	                </a>
	                <ul className="dropdown-menu">
	                    <li><a href="#">Profile</a></li>
	                    <li><a href="#">Settings</a></li>
	                    <li role="separator" className="divider"></li>
	                    <li><a href="#">Logout</a></li>
	                </ul>
	            </li>
	        </ul>
	 	);
	}
}

/* Side Navigation Components */
class SideNavigation extends React.Component {
	render() {
		var sideNavigationItem = this.props.items.map(function(item) {
			return (
				<SideNavigationItem key={item.id} label={item.label} class={item.class} path={item.url} info={item.info} active={item.active}/>
			);
		});
    	return (
	        <nav className="col-sm-3 col-md-2 sidebar">
	            <SideNavigationTitle title={this.props.title}/>
	            <ul className="nav nav-sidebar">
	                {sideNavigationItem}
	            </ul>
	        </nav>
	 	);
	}
}

class SideNavigationTitle extends React.Component {
	render() {
	    return (
			<h4>{this.props.title}</h4>
	 	);
	}
}

class SideNavigationItem extends React.Component {
	render() {
	    return (
			<li className={this.props.active}>
				<a href={this.props.path}>
					<i className={'fa ' + this.props.class} aria-hidden="true"></i>
					{this.props.label}
					{this.props.info &&
						<Badge value={this.props.info} class="pull-right"/>
					}
				</a>
			</li>
	 	);
	}
}

/* Intro Content Components */
class IntroContent extends React.Component {
	render() {
		var introContentItem = this.props.components.map(function(component) {
			return (
				<IntroContentItem key={component.id} label={component.label} value={component.value} class={component.class}/>
			);
		});
    	return (
	        <div className="content-intro row">
	            {introContentItem}
	        </div>
	 	);
	}
}

class IntroContentItem extends React.Component {
	render() {
	    return (
			<div className="col-xs-6 col-sm-4 col-md-2">
	            <div className="panel panel-default {this.props.class}">
	                <div className="panel-body">
	                    <h4>{this.props.value}</h4>
	                    <span className="text-muted">{this.props.label}</span>
	                </div>
	            </div>
	        </div>   
	 	);
	}
}

/* Content Toolbar Components */
class ContentToolbar extends React.Component {
	render() {
	    return (
	        <div className="content-toolbar row">
		        <div className="pull-left">
		            <ContentToolbarBulk />
		            <ContentToolbarActions />
		            <ContentToolbarMore />
		        </div>
		        <div className="pull-right">
		           <ContentToolbarSearch />
		        </div>
		    </div>
	 	);
	}
}

class ContentToolbarSearch extends React.Component {
	render() {
	    return (
            <div className="btn-group">
                <button type="button" className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-default"><i className="fa fa-filter" aria-hidden="true"></i></button>
            </div>
	 	);
	}
}

class ContentToolbarBulk extends React.Component {
	render() {
	    return (
            <div className="btn-group">
                <button type="button" className="btn btn-default"><input type="checkbox" /><span className="caret"></span></button>
            </div>
	 	);
	}
}

class ContentToolbarActions extends React.Component {
	render() {
	    return (
            <div className="btn-group">
                <button type="button" className="btn btn-default"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-default"><i className="fa fa-envelope" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-default"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
	 	);
	}
}

class ContentToolbarMore extends React.Component {
	render() {
	    return (
			<div className="btn-group" role="group">
			    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			        More <span className="caret"></span>
			    </button>
			    <ul className="dropdown-menu">
			        <li><a href="#">Login as Client</a></li>
			        <li><a href="#">Email/Password Reset</a></li>
			    </ul>
			</div>
	 	);
	}
}

/* DataTable Components */
class DataTable extends React.Component {
	render() {
		var dataRow = this.props.data.map(function(item) {
			return (
				<DataTableRow key={item.id} data={item.data}/>
			);
		});
	    return (
	        <div className="table-responsive">
	            <table className="table table-striped">
	            	<DataTableHeader data={this.props.header}/>
	                <tbody>
	                    {dataRow}
	                </tbody>
	            </table>
	        </div>
	 	);
	}
}

class DataTableHeader extends React.Component {
	render() {
		var headerColumns = this.props.data.map(function(item) {
			return (
				<th key={item.id} className={item.class}>{item.label}</th>
			);
		});
	    return (
	        <thead>
	            <tr>
	                {headerColumns}
	            </tr>
	        </thead>
	 	);
	}
}

class DataTableRow extends React.Component {
	render() {
		var dataColumns = this.props.data.map(function(item) {
			switch(item.component) {
				case 'label':
					var component = <Label data={item.value} />;
					break;
				case 'image':
					var component = <Image data={item.value} />;
					break;
				case 'bulkCheckbox':
					var component = <BulkCheckbox data={item.value} />;
					break;
				default:
					var component = item.value;

			}
			return (
				<td key={item.id} className={item.class}>{component}</td>
			);
		});
	    return (
	        <tr>
	            {dataColumns}
	        </tr>
	 	);
	}
}

/* Helpers Components */
class Label extends React.Component {
	render() {
		switch(this.props.data) {
			case 'active':
				var label = "success";
				break;
			case 'fraud':
				var label = "danger";
				break;
			case 'suspend':
				var label = "warning";
				break;
		}
	    return (
			<span className={"label label-" + label}>{this.props.data}</span>
	 	);
	}
}
class Image extends React.Component {
	render() {
	    return (
       		<img src={this.props.data} />
	 	);
	}
}
class BulkCheckbox extends React.Component {
	render() {
	    return (
       		<input type="checkbox" name={this.props.data} />
	 	);
	}
}
class Badge extends React.Component {
	render() {
	    return (
        	<span className={"badge " + this.props.class}>{this.props.value}</span>
	 	);
	}
}