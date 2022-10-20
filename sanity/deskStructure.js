import S from '@sanity/desk-tool/structure-builder'
import { BsGearFill, BsBrush, BsCodeSlash, BsCompass, BsBullseye, BsStars } from 'react-icons/bs'
import { FaCode, FaDiceD6, FaBolt, FaRegQuestionCircle, FaTools,FaDollarSign, FaRegFolderOpen, FaRegImages } from 'react-icons/fa'
import {BiGroup, } from 'react-icons/bi'


export default () =>
  S.list()
    .title('Content')
    .items(
      [

        // ...S.documentTypeListItems().filter(item => [
        //   'pages'
        // ].includes(item.getId())),

        // S.listItem()
        // .title('Sections')
        // .icon(FaCode)
        // .child(
        //   S.list()
        //     .title('Page Sections')
        //     .items([

        //         S.listItem()
        //         .title('Hero')
        //         .icon(FaBolt)
        //         .child(
        //           S.document()
        //             .schemaType('hero')
        //             .documentId('hero')
        //         ),
        //         S.listItem()
        //         .title('About Us')
        //         .icon(FaRegQuestionCircle)
        //         .child(
        //           S.document()
        //             .schemaType('about')
        //             .documentId('about')
        //         ),
        //         S.listItem()
        //         .title('Values')
        //         .icon(BsBullseye)
        //         .child(
        //           S.document()
        //             .schemaType('values')
        //             .documentId("92ce2441-04c5-4c65-bfc2-4149a9d9edcc")
        //         ),
        //         S.listItem()
        //         .title('Feature Panel')
        //         .icon(FaTools)
        //         .child(
        //           S.document()
        //             .schemaType('features')
        //             .documentId('features')
        //         ),

        //         S.listItem()
        //         .title('Services')
        //         .icon(FaDiceD6)
        //         .child(
        //           S.document()
        //             .schemaType('services')
        //             .documentId('services')
        //         ),

        //         S.listItem()
        //         .title('Pricing Table')
        //         .icon(FaDollarSign)
        //         .child(
        //           S.document()
        //             .schemaType('pricing')
        //             .documentId('pricingTable')
        //         ),

        //         S.listItem()
        //         .title('Frequently Asked Questions')
        //         .icon(FaRegQuestionCircle)
        //         .child(
        //           S.document()
        //             .schemaType('faqs')
        //             .documentId('faqs')
        //         ),

        //         S.listItem()
        //         .title('portfolio')
        //         .icon(FaRegFolderOpen)
        //         .child(
        //           S.document()
        //             .schemaType('portfolio')
        //             .documentId('portfolio')
        //         ),

        //         S.divider(),

        //   ]),    
        // ),

        // S.listItem()
        // .title('Team')
        // .icon(BiGroup)
        // .child(
        //   S.document()
        //     .schemaType('team')
        //     .documentId('team')
        // ),

        // S.listItem()
        // .title('Testimonials')
        // .icon(BsStars)
        // .child(
        //   S.document()
        //     .schemaType('testimonials')
        //     .documentId('testimonials')
        // ), 

        // S.listItem()
        // .title('Featured Clients')
        // .icon(FaRegImages)
        // .child(
        //   S.document()
        //     .schemaType('clientGallery')
        //     .documentId('clientGallery')
        // ), 

        // S.divider(),

        ...S.documentTypeListItems().filter(item => [
          'locations'
        ].includes(item.getId())),

        S.listItem()
        .title('Settings')
        .icon(BsGearFill)
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings Documents')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Metadata')
                .icon(BsCodeSlash)
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              // S.listItem()
              //   .title('Main Navigation')
              //   .icon(BsCompass)
              //   .child(
              //     S.document()
              //       .schemaType('navigation')
              //       .documentId('navigation')
              //   )
            ])
        ),

        S.divider(),

        ...S.documentTypeListItems().filter(item => ![
          'phone',
          'siteSettings',
          'siteColours',
          'navigation',
          'catalogs',
          'locations',
          'categories',
          'brands',
          'promotions',
          'pages',
          'cta',
          'feature',
          'features',
          'testimonials',
          'hero',
          'services',
          'service',
          'about',
          'button',
          'reasons',
          'socialPlatforms',
          'socialConnections',
          'team',
          'portfolio',
          'counts',
          'values',
          'value',
          'pricing',
          'pricingItem',
          'faqs',
          'clientGallery'
        ].includes(item.getId())),
      ]
    )