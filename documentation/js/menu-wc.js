'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">emailclient documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-650c8beafe9dbbf62172273d1f1d5bb1bae563b267ab38c106d478ffa1c012ddfb931a6a8424dc4dc76f9c2358ade43a4653cd6e732121f7d6665a0abd59c6d5"' : 'data-target="#xs-components-links-module-AppModule-650c8beafe9dbbf62172273d1f1d5bb1bae563b267ab38c106d478ffa1c012ddfb931a6a8424dc4dc76f9c2358ade43a4653cd6e732121f7d6665a0abd59c6d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-650c8beafe9dbbf62172273d1f1d5bb1bae563b267ab38c106d478ffa1c012ddfb931a6a8424dc4dc76f9c2358ade43a4653cd6e732121f7d6665a0abd59c6d5"' :
                                            'id="xs-components-links-module-AppModule-650c8beafe9dbbf62172273d1f1d5bb1bae563b267ab38c106d478ffa1c012ddfb931a6a8424dc4dc76f9c2358ade43a4653cd6e732121f7d6665a0abd59c6d5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-fae36f9b1f3f2bf5d450ce8b8d74403c51b85f21ee0f966cde9b9fc79f874f98d6de71ca3e8ea0cd5dfcebc814561ca912bc0c994b8b76233104a12ebfcea0c0"' : 'data-target="#xs-components-links-module-AuthModule-fae36f9b1f3f2bf5d450ce8b8d74403c51b85f21ee0f966cde9b9fc79f874f98d6de71ca3e8ea0cd5dfcebc814561ca912bc0c994b8b76233104a12ebfcea0c0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-fae36f9b1f3f2bf5d450ce8b8d74403c51b85f21ee0f966cde9b9fc79f874f98d6de71ca3e8ea0cd5dfcebc814561ca912bc0c994b8b76233104a12ebfcea0c0"' :
                                            'id="xs-components-links-module-AuthModule-fae36f9b1f3f2bf5d450ce8b8d74403c51b85f21ee0f966cde9b9fc79f874f98d6de71ca3e8ea0cd5dfcebc814561ca912bc0c994b8b76233104a12ebfcea0c0"' }>
                                            <li class="link">
                                                <a href="components/SigninComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SigninComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InboxModule.html" data-type="entity-link" >InboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InboxModule-aa31f0e666fbf4ffbd8ff2587519448bae1b54ff36704113371f48a624951977ec8265573137396241f85c0c71a37294b95a948669cadf91490262f44bb413e0"' : 'data-target="#xs-components-links-module-InboxModule-aa31f0e666fbf4ffbd8ff2587519448bae1b54ff36704113371f48a624951977ec8265573137396241f85c0c71a37294b95a948669cadf91490262f44bb413e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InboxModule-aa31f0e666fbf4ffbd8ff2587519448bae1b54ff36704113371f48a624951977ec8265573137396241f85c0c71a37294b95a948669cadf91490262f44bb413e0"' :
                                            'id="xs-components-links-module-InboxModule-aa31f0e666fbf4ffbd8ff2587519448bae1b54ff36704113371f48a624951977ec8265573137396241f85c0c71a37294b95a948669cadf91490262f44bb413e0"' }>
                                            <li class="link">
                                                <a href="components/EmailCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailReplyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailReplyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailShowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailShowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaceholderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceholderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InboxRoutingModule.html" data-type="entity-link" >InboxRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-300015ac9d53d3602f4bc27722e7cf476294464a28a44b6d92deb7e020185230e421687136914569ea97a254bb6193179a0a096b32f09acf96ec8ef4613ffb07"' : 'data-target="#xs-components-links-module-SharedModule-300015ac9d53d3602f4bc27722e7cf476294464a28a44b6d92deb7e020185230e421687136914569ea97a254bb6193179a0a096b32f09acf96ec8ef4613ffb07"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-300015ac9d53d3602f4bc27722e7cf476294464a28a44b6d92deb7e020185230e421687136914569ea97a254bb6193179a0a096b32f09acf96ec8ef4613ffb07"' :
                                            'id="xs-components-links-module-SharedModule-300015ac9d53d3602f4bc27722e7cf476294464a28a44b6d92deb7e020185230e421687136914569ea97a254bb6193179a0a096b32f09acf96ec8ef4613ffb07"' }>
                                            <li class="link">
                                                <a href="components/InputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatchPassword.html" data-type="entity-link" >MatchPassword</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UniqueUsername.html" data-type="entity-link" >UniqueUsername</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthHttpInterceptor.html" data-type="entity-link" >AuthHttpInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/EmailResolverService.html" data-type="entity-link" >EmailResolverService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Email.html" data-type="entity-link" >Email</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseGetEmails.html" data-type="entity-link" >ResponseGetEmails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/sendEmailResponse.html" data-type="entity-link" >sendEmailResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SigninCredentials.html" data-type="entity-link" >SigninCredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SigninResponse.html" data-type="entity-link" >SigninResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignupCredentials.html" data-type="entity-link" >SignupCredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignupResponse.html" data-type="entity-link" >SignupResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserNameAvailableResponse.html" data-type="entity-link" >UserNameAvailableResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});